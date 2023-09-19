import { Module } from '@nestjs/common';
import { LoansService } from './loans.service';
import { LoansController } from './loans.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MembersModule } from 'src/members/members.module';
import { LoanTypesModule } from 'src/loan-types/loan-types.module';
import { LoanRepaymentModule } from 'src/loan-repayment/loan-repayment.module';

@Module({
  controllers: [LoansController],
  providers: [LoansService],
  imports: [PrismaModule, MembersModule, LoanTypesModule, LoanRepaymentModule],
  exports: [LoansService],
})
export class LoansModule {}
