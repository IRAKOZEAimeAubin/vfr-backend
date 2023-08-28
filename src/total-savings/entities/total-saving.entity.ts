import { ApiProperty } from '@nestjs/swagger';
import { TotalSavings } from '@prisma/client';

export class TotalSavingEntity implements TotalSavings {
  @ApiProperty()
  id: string;
  @ApiProperty()
  amount: number;
  @ApiProperty()
  comment: string;
  @ApiProperty()
  approved: boolean;
  @ApiProperty()
  creatorId: string;
  @ApiProperty()
  approvalOfficerId: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}
