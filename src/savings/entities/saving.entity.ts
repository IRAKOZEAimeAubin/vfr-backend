import { ApiProperty } from '@nestjs/swagger';
import { Savings } from '@prisma/client';

export class SavingsEntity implements Savings {
  @ApiProperty()
  id: string;
  @ApiProperty()
  previousSavings: number;
  @ApiProperty()
  currentSavings: number;
  @ApiProperty()
  memberId: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}
