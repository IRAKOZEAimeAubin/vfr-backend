import { ApiProperty } from '@nestjs/swagger';

export class CreateMemberDto {
  @ApiProperty()
  regNumber: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  department: string;
  @ApiProperty()
  monthlySavings: number;
}
