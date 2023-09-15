import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateLoanDto {
  @IsString()
  @ApiProperty({ required: false })
  memberId: string;

  @IsString()
  @ApiProperty({ required: false })
  loanTypeId: string;

  @IsNumber()
  @ApiProperty({ required: false })
  principal: number;

  @IsNumber()
  @ApiProperty({ required: false })
  installments: number;

  @IsString()
  @ApiProperty({ required: false })
  reason: string;

  interest: number;

  amount: number;

  @ApiProperty({ required: false, default: false })
  approved: boolean;

  creatorId: string;

  approvalOfficerId: string;
}
