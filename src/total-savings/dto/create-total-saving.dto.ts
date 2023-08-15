import { ApiProperty } from '@nestjs/swagger';

export class CreateTotalSavingDto {
  amount: number;

  comment: string;

  approved?: boolean;
}
