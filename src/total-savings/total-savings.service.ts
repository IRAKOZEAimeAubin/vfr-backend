import { Injectable } from '@nestjs/common';
import { CreateTotalSavingDto } from './dto/create-total-saving.dto';
import { UpdateTotalSavingDto } from './dto/update-total-saving.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TotalSavingsService {
  constructor(private prisma: PrismaService) {}

  async create(createTotalSavingDto: CreateTotalSavingDto) {
    const activeMembers = await this.prisma.member.findMany({
      where: {
        active: true,
      },
      select: {
        id: true,
        monthlyPledge: true,
        totalPledge: true,
      },
    });

    const totalAmount = activeMembers.reduce(
      (total, member) => total + member.monthlyPledge,
      0,
    );

    const month = new Intl.DateTimeFormat('en-EN', { month: 'long' }).format(
      new Date(Date.now()),
    );

    createTotalSavingDto.amount = totalAmount;
    createTotalSavingDto.comment = `Being total savings for ${month}`;

    return this.prisma.totalSavings.create({
      data: createTotalSavingDto,
    });
  }

  findAll() {
    return this.prisma.totalSavings.findMany();
  }

  findOne(id: string) {
    return this.prisma.totalSavings.findUnique({
      where: {
        id,
      },
    });
  }

  async approve(id: string, updateTotalSavingDto: UpdateTotalSavingDto) {
    const activeMembers = await this.prisma.member.findMany({
      where: {
        active: true,
      },
      select: {
        id: true,
        monthlyPledge: true,
        totalPledge: true,
      },
    });

    const savingsPromises = activeMembers.map((member) =>
      this.prisma.savings.create({
        data: {
          previousSavings: member.totalPledge,
          currentSavings: member.totalPledge + member.monthlyPledge,
          memberId: member.id,
        },
      }),
    );

    await Promise.all(savingsPromises);

    const membersPromises = activeMembers.map((member) =>
      this.prisma.member.update({
        where: {
          id: member.id,
        },
        data: {
          totalPledge: member.totalPledge + member.monthlyPledge,
        },
      }),
    );

    await Promise.all(membersPromises);

    updateTotalSavingDto.approved = true;

    return this.prisma.totalSavings.update({
      where: { id },
      data: updateTotalSavingDto,
    });
  }

  reject(id: string, updateTotalSavingDto: UpdateTotalSavingDto) {
    updateTotalSavingDto.approved = false;

    return this.prisma.totalSavings.update({
      where: { id },
      data: updateTotalSavingDto,
    });
  }

  remove(id: string) {
    return this.prisma.totalSavings.delete({
      where: {
        id,
      },
    });
  }
}
