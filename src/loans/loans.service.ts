import { Injectable } from '@nestjs/common';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LoansService {
  constructor(private prisma: PrismaService) {}

  async create(createLoanDto: CreateLoanDto) {
    const loanType = await this.prisma.loanType.findUnique({
      where: {
        loanId: createLoanDto.loanTypeId,
      },
    });

    createLoanDto.interest =
      createLoanDto.principal *
      loanType.interestRate *
      createLoanDto.installments;

    createLoanDto.amount = createLoanDto.principal + createLoanDto.interest;

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
    updateLoanDto.approved = true;

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

  async update(id: string, updateLoanDto: UpdateLoanDto) {
    const toBeUpdated = await this.prisma.loan.findUnique({
      where: {
        id,
      },
      include: {
        loanType: true,
      },
    });

    updateLoanDto.approved = null;
    updateLoanDto.approvalOfficerId = null;

    if (updateLoanDto.principal && updateLoanDto.installments) {
      updateLoanDto.interest =
        updateLoanDto.principal *
        toBeUpdated.loanType.interestRate *
        updateLoanDto.installments;

      updateLoanDto.amount = updateLoanDto.principal + updateLoanDto.interest;
    } else if (updateLoanDto.principal && !updateLoanDto.installments) {
      updateLoanDto.interest =
        updateLoanDto.principal *
        toBeUpdated.loanType.interestRate *
        toBeUpdated.installments;

      updateLoanDto.amount = updateLoanDto.principal + updateLoanDto.interest;
    } else if (!updateLoanDto.principal && updateLoanDto.installments) {
      updateLoanDto.interest =
        toBeUpdated.principal *
        toBeUpdated.loanType.interestRate *
        updateLoanDto.installments;

      updateLoanDto.amount = toBeUpdated.principal + updateLoanDto.interest;
    } else {
      updateLoanDto.interest =
        toBeUpdated.principal *
        toBeUpdated.loanType.interestRate *
        toBeUpdated.installments;

      updateLoanDto.amount = toBeUpdated.principal + updateLoanDto.interest;
    }

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

    updateLoanDto.approved = null;
    updateLoanDto.approvalOfficerId = null;
    updateLoanDto.amount = 0;

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
    updateLoanDto.amount = qclAddedLoan.amount - amountRepayed;

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
