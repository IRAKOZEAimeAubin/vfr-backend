import { Module } from '@nestjs/common';
import { SavingsService } from './savings.service';
import { SavingsController } from './savings.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SavingsController],
  providers: [SavingsService],
  imports: [PrismaModule],
  exports: [SavingsService],
})
export class SavingsModule {}
