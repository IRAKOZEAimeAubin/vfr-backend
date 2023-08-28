import { ApiProperty } from '@nestjs/swagger';
import { Loan } from '@prisma/client';

export class LoanEntity implements Loan {
  @ApiProperty()
  id: string;
  @ApiProperty()
  principal: number;
  @ApiProperty()
  installments: number;
  @ApiProperty()
  interest: number;
  @ApiProperty()
  amount: number;
  @ApiProperty()
  reason: string;
  @ApiProperty()
  memberId: string;
  @ApiProperty()
  loanTypeId: string;
  @ApiProperty()
  approved: boolean;
  @ApiProperty()
  creatorId: string;
  @ApiProperty()
  approvalOfficerId: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}
