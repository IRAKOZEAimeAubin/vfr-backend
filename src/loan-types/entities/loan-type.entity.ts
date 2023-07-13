import { ApiProperty } from '@nestjs/swagger';
import { LoanType } from '@prisma/client';

export class LoanTypeEntity implements LoanType {
  @ApiProperty()
  id: string;
  @ApiProperty()
  loanId: string;
  @ApiProperty()
  typeName: string;
  @ApiProperty()
  interestRate: number;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}
