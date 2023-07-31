import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString, MinLength } from 'class-validator';

export class CreateTotalSavingDto {
  amount: number;

  @IsString()
  @MinLength(4)
  @ApiProperty()
  comment: string;

  @IsBoolean()
  @ApiProperty({ required: false })
  approved: boolean;
}
