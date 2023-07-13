import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class CreateLoanTypeDto {
  loanId: string;

  @IsString()
  @MinLength(4)
  @ApiProperty()
  typeName: string;

  @ApiProperty()
  interestRate: number;
}
