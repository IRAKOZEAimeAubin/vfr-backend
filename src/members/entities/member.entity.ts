import { ApiProperty } from '@nestjs/swagger';
import { Member } from '@prisma/client';

export class MemberEntity implements Member {
  @ApiProperty()
  id: string;
  @ApiProperty()
  regNumber: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  department: string;
  @ApiProperty()
  monthlyPledge: number;
  @ApiProperty()
  totalPledge: number;
  @ApiProperty({ required: false })
  active: boolean;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}
