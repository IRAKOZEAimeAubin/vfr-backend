import { Injectable } from '@nestjs/common';
import { UpdateSavingDto } from './dto/update-saving.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SavingsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.savings.findMany();
  }

  findOne(id: string) {
    return this.prisma.savings.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updateSavingDto: UpdateSavingDto) {
    return this.prisma.savings.update({
      where: { id },
      data: updateSavingDto,
    });
  }

  remove(id: string) {
    return this.prisma.savings.delete({
      where: { id },
    });
  }
}
