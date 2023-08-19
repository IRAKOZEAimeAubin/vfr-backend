import { Injectable } from '@nestjs/common';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LoansService {
  constructor(private prisma: PrismaService) {}

  create(createLoanDto: CreateLoanDto) {
    return this.prisma.loan.create({
      data: createLoanDto,
    });
  }

  findAll() {
    return this.prisma.loan.findMany({
      include: {
        member: true,
        loanType: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.member.findUnique({
      where: { id },
    });
  }

  async approve(id: string, updateLoanDto: UpdateLoanDto) {
    const approvedLoan = await this.prisma.loan.findUnique({
      where: { id },
      include: {
        loanType: true,
      },
    });
    updateLoanDto.approved = true;
    updateLoanDto.interest =
      approvedLoan.loanType.interestRate * approvedLoan.principal;
    updateLoanDto.amount =
      approvedLoan.principal +
      approvedLoan.loanType.interestRate * approvedLoan.principal;

    return this.prisma.loan.update({
      where: { id },
      data: updateLoanDto,
    });
  }

  reject(id: string, updateLoanDto: UpdateLoanDto) {
    updateLoanDto.approved = false;

    return this.prisma.loan.update({
      where: { id },
      data: updateLoanDto,
    });
  }

  remove(id: string) {
    return this.prisma.loan.delete({
      where: {
        id,
      },
    });
  }
}
