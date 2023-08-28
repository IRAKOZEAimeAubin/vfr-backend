import { Injectable } from '@nestjs/common';
import { CreateLoanTypeDto } from './dto/create-loan-type.dto';
import { UpdateLoanTypeDto } from './dto/update-loan-type.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LoanTypesService {
  constructor(private prisma: PrismaService) {}

  private async generateNewId() {
    const randomNum = Math.floor(Math.random() * 100);
    const randomString = randomNum.toString().padStart(2, '0');
    const newId = `LT${randomString}`;
    const existingLoanType = await this.prisma.loanType.findUnique({
      where: { loanId: newId },
    });

    if (existingLoanType) {
      return this.generateNewId();
    }

    return newId;
  }

  async create(createLoanTypeDto: CreateLoanTypeDto) {
    const ratePercent = createLoanTypeDto.interestRate / 100;
    const generatedLoanId = await this.generateNewId();

    createLoanTypeDto.interestRate = ratePercent;
    createLoanTypeDto.loanId = generatedLoanId;

    return this.prisma.loanType.create({
      data: createLoanTypeDto,
    });
  }

  findAll() {
    return this.prisma.loanType.findMany({
      include: {
        createdBy: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.loanType.findUnique({
      where: {
        loanId: id,
      },
      include: {
        createdBy: true,
      },
    });
  }

  update(id: string, updateLoanTypeDto: UpdateLoanTypeDto) {
    const ratePercent = updateLoanTypeDto.interestRate / 100;
    updateLoanTypeDto.interestRate = ratePercent;

    return this.prisma.loanType.update({
      where: { loanId: id },
      data: updateLoanTypeDto,
    });
  }

  remove(id: string) {
    return this.prisma.loanType.delete({ where: { loanId: id } });
  }
}
