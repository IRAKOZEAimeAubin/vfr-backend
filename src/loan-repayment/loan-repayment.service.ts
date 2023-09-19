import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LoanRepaymentService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.loanPayment.findMany();
  }

  findOne(id: string) {
    return this.prisma.loanPayment.findUnique({
      where: {
        id,
      },
    });
  }
}
