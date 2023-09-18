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
        createdBy: true,
        approvedBy: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.loan.findUnique({
      where: { id },
      include: {
        member: true,
        loanType: true,
        createdBy: true,
        approvedBy: true,
      },
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
      approvedLoan.loanType.interestRate *
      approvedLoan.principal *
      approvedLoan.installments;

    updateLoanDto.amount =
      approvedLoan.principal +
      approvedLoan.loanType.interestRate *
        approvedLoan.principal *
        approvedLoan.installments;

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

  async restructure(id: string, updateLoanDto: UpdateLoanDto) {
    const restructuredLoan = await this.prisma.loan.findUnique({
      where: { id },
      include: {
        loanType: true,
      },
    });

    updateLoanDto.interest =
      restructuredLoan.loanType.interestRate *
      restructuredLoan.principal *
      updateLoanDto.installments;

    updateLoanDto.amount =
      restructuredLoan.principal +
      restructuredLoan.loanType.interestRate *
        restructuredLoan.principal *
        updateLoanDto.installments;

    updateLoanDto.approved = null;
    updateLoanDto.approvalOfficerId = null;

    return this.prisma.loan.update({
      where: { id },
      data: updateLoanDto,
    });
  }

  async topUp(id: string, updateLoanDto: UpdateLoanDto) {
    const toppedUpLoan = await this.prisma.loan.findUnique({
      where: { id },
      include: {
        loanType: true,
      },
    });

    updateLoanDto.interest =
      toppedUpLoan.loanType.interestRate *
      updateLoanDto.principal *
      updateLoanDto.installments;

    updateLoanDto.amount =
      updateLoanDto.principal +
      toppedUpLoan.loanType.interestRate *
        updateLoanDto.principal *
        updateLoanDto.installments;

    updateLoanDto.approved = null;
    updateLoanDto.approvalOfficerId = null;

    return this.prisma.loan.update({
      where: { id },
      data: updateLoanDto,
    });
  }

  payOff(id: string, updateLoanDto: UpdateLoanDto) {
    return 'Loan Pay Off';
  }

  addQCL(id: string, updateLoanDto: UpdateLoanDto) {
    return 'Loan Add QCL';
  }

  remove(id: string) {
    return this.prisma.loan.delete({
      where: {
        id,
      },
    });
  }
}
