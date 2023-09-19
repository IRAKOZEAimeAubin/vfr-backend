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
        loanRepayments: true,
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

  update(id: string, updateLoanDto: UpdateLoanDto) {
    updateLoanDto.approved = null;
    updateLoanDto.approvalOfficerId = null;

    return this.prisma.loan.update({
      where: { id },
      data: updateLoanDto,
    });
  }

  async payOff(id: string, updateLoanDto: UpdateLoanDto) {
    const payedOffLoan = await this.prisma.loan.findUnique({
      where: { id },
      include: {
        loanType: true,
      },
    });

    await this.prisma.loanPayment.create({
      data: {
        principalRepayed: payedOffLoan.principal,
        interestRepayed: payedOffLoan.interest / payedOffLoan.installments,
        totalRepayed:
          payedOffLoan.principal +
          payedOffLoan.interest / payedOffLoan.installments,
        loanId: payedOffLoan.id,
      },
    });

    updateLoanDto.principal = 0;
    updateLoanDto.installments = 0;
    updateLoanDto.interest = 0;
    updateLoanDto.amount = 0;
    updateLoanDto.approved = null;
    updateLoanDto.approvalOfficerId = null;

    return this.prisma.loan.update({
      where: { id },
      data: updateLoanDto,
    });
  }

  async addQCL(id: string, updateLoanDto: UpdateLoanDto) {
    const qclAddedLoan = await this.prisma.loan.findUnique({
      where: { id },
      include: {
        loanType: true,
      },
    });

    const principalRepayed = qclAddedLoan.principal / qclAddedLoan.installments;
    const interestRepayed = qclAddedLoan.interest / qclAddedLoan.installments;
    const amountRepayed = principalRepayed + interestRepayed;

    await this.prisma.loanPayment.create({
      data: {
        principalRepayed: principalRepayed,
        interestRepayed: interestRepayed,
        totalRepayed: amountRepayed,
        loanId: qclAddedLoan.id,
      },
    });

    updateLoanDto.approved = null;
    updateLoanDto.approvalOfficerId = null;

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
