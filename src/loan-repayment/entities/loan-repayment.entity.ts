import { ApiProperty } from '@nestjs/swagger';
import { LoanPayment } from '@prisma/client';

export class LoanRepaymentEntity implements LoanPayment {
  @ApiProperty()
  id: string;
  @ApiProperty()
  principalRepayed: number;
  @ApiProperty()
  interestRepayed: number;
  @ApiProperty()
  totalRepayed: number;
  @ApiProperty()
  loanId: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}
