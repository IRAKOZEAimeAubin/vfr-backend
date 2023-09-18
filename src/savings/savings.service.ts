import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SavingsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.savings.findMany({
      include: {
        member: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.savings.findUnique({
      where: {
        id,
      },
      include: {
        member: true,
      },
    });
  }
}
