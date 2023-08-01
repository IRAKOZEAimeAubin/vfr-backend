import { ApiProperty } from '@nestjs/swagger';
import { TotalSavings } from '@prisma/client';

export class TotalSavingEntity implements TotalSavings {
  status: boolean;
  @ApiProperty()
  id: string;
  @ApiProperty()
  amount: number;
  @ApiProperty()
  comment: string;
  @ApiProperty()
  approved: boolean;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}