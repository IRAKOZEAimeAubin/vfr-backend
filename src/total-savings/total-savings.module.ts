import { Module } from '@nestjs/common';
import { TotalSavingsService } from './total-savings.service';
import { TotalSavingsController } from './total-savings.controller';

@Module({
  controllers: [TotalSavingsController],
  providers: [TotalSavingsService],
})
export class TotalSavingsModule {}
