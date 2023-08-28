import { ApiProperty } from '@nestjs/swagger';

export class CreateSavingDto {
  previousSavings: number;

  currentSavings: number;

  @ApiProperty({ required: false })
  memberId: string;

  comment: string;
}
