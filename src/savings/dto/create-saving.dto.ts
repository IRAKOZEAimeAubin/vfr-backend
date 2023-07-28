import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateSavingDto {
  @IsNumber()
  savings: number;

  @IsString()
  @ApiProperty({ required: false })
  memberId: string;
}
