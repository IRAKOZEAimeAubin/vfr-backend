import { Module } from '@nestjs/common';
import { LoanRepaymentService } from './loan-repayment.service';
import { LoanRepaymentController } from './loan-repayment.controller';

@Module({
  controllers: [LoanRepaymentController],
  providers: [LoanRepaymentService]
})
export class LoanRepaymentModule {}
