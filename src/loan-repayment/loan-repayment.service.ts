import { Injectable } from '@nestjs/common';
import { CreateLoanRepaymentDto } from './dto/create-loan-repayment.dto';
import { UpdateLoanRepaymentDto } from './dto/update-loan-repayment.dto';

@Injectable()
export class LoanRepaymentService {
  findAll() {
    return `This action returns all loanRepayment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} loanRepayment`;
  }
}
