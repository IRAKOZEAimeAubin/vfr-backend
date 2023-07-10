import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MembersModule } from './members/members.module';
import { LoansModule } from './loans/loans.module';
import { SavingsModule } from './savings/savings.module';

@Module({
  imports: [PrismaModule, UsersModule, AuthModule, MembersModule, LoansModule, SavingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
