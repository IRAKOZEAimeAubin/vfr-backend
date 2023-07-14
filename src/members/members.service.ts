import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MembersService {
  constructor(private prisma: PrismaService) {}

  private async generateNewId() {
    const randomNum = Math.floor(Math.random() * 1000);
    const randomString = randomNum.toString().padStart(3, '0');
    const newId = `VFC${randomString}`;
    const existingLoanType = await this.prisma.member.findUnique({
      where: { regNumber: newId },
    });

    if (existingLoanType) {
      return this.generateNewId();
    }

    return newId;
  }

  async create(createMemberDto: CreateMemberDto) {
    const generatedRegNum = await this.generateNewId();

    createMemberDto.regNumber = generatedRegNum;

    return this.prisma.member.create({
      data: createMemberDto,
    });
  }

  findAll() {
    return this.prisma.member.findMany();
  }

  findOne(id: string) {
    return this.prisma.member.findUnique({ where: { id } });
  }

  update(id: string, updateMemberDto: UpdateMemberDto) {
    return this.prisma.member.update({
      where: { id },
      data: updateMemberDto,
    });
  }

  remove(id: string) {
    return this.prisma.member.delete({ where: { id } });
  }
}
