import { Module } from '@nestjs/common';
import { LoansService } from './loans.service';
import { LoansController } from './loans.controller';

@Module({
  controllers: [LoansController],
  providers: [LoansService]
})
export class LoansModule {}
