import { Module } from '@nestjs/common';
import { LoanTypesService } from './loan-types.service';
import { LoanTypesController } from './loan-types.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [LoanTypesController],
  providers: [LoanTypesService],
  imports: [PrismaModule],
  exports: [LoanTypesService],
})
export class LoanTypesModule {}
