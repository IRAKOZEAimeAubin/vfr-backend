import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class CreateMemberDto {
  regNumber: string;

  @IsString()
  @MinLength(6)
  @ApiProperty()
  name: string;

  @IsString()
  @MinLength(10)
  @ApiProperty()
  phone: string;

  @IsString()
  @MinLength(4)
  @ApiProperty()
  department: string;

  @ApiProperty()
  monthlyPledge: number;

  @ApiProperty({ required: false })
  active: boolean;
}
