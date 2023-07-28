import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateTotalSavingDto {
  @IsNumber()
  amount: number;

  @IsString()
  @MinLength(4)
  @ApiProperty()
  comment: string;

  @IsBoolean()
  @ApiProperty({ required: false })
  status: boolean;
}
