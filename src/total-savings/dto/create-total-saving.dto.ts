import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export class CreateTotalSavingDto {
  amount: number;

  @ApiProperty({ required: false })
  comment: string;

  @ApiProperty({ required: false, default: false })
  approved: boolean;
}
