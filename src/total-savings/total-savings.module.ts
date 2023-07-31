import { Module } from '@nestjs/common';
import { TotalSavingsService } from './total-savings.service';
import { TotalSavingsController } from './total-savings.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MembersModule } from 'src/members/members.module';
import { SavingsModule } from 'src/savings/savings.module';

@Module({
  controllers: [TotalSavingsController],
  providers: [TotalSavingsService],
  imports: [PrismaModule, MembersModule, SavingsModule],
  exports: [TotalSavingsService],
})
export class TotalSavingsModule {}
