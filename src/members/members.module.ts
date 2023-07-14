import { Module } from '@nestjs/common';
import { MembersService } from './members.service';
import { MembersController } from './members.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [MembersController],
  providers: [MembersService],
  imports: [PrismaModule],
  exports: [MembersService],
})
export class MembersModule {}
