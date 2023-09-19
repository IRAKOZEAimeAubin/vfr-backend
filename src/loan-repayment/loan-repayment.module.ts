import { Module } from '@nestjs/common';
import { LoanRepaymentService } from './loan-repayment.service';
import { LoanRepaymentController } from './loan-repayment.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [LoanRepaymentController],
  providers: [LoanRepaymentService],
  imports: [PrismaModule],
  exports: [LoanRepaymentService],
})
export class LoanRepaymentModule {}
