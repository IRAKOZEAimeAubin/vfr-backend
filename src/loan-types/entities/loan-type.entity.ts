import { ApiProperty } from '@nestjs/swagger';
import { LoanType } from '@prisma/client';

export class LoanTypeEntity implements LoanType {
  @ApiProperty()
  loanId: string;
  @ApiProperty()
  typeName: string;
  @ApiProperty()
  interestRate: number;
  @ApiProperty()
  creatorId: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}
