import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateLoanDto {
  @IsString()
  @ApiProperty()
  memberId: string;

  @IsString()
  @ApiProperty()
  loanTypeId: string;

  @IsNumber()
  @ApiProperty()
  principal: number;

  @IsNumber()
  @ApiProperty()
  installments: number;

  @IsString()
  @ApiProperty()
  reason: string;

  interest: number;

  amount: number;

  @ApiProperty({ required: false, default: false })
  approved: boolean;

  creatorId: string;

  approvalOfficerId: string;
}
