import { ApiProperty } from '@nestjs/swagger';
import { Savings } from '@prisma/client';

export class SavingsEntity implements Savings {
  @ApiProperty()
  savings: number;
  @ApiProperty()
  id: string;
  @ApiProperty()
  memberId: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}
