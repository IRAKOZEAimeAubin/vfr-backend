import { ApiProperty } from '@nestjs/swagger';
import {
  IsOptional,
  IsString,
  Length,
  Matches,
  MinLength,
} from 'class-validator';
import { IsUserRole } from 'validators/UserRoleValidator';

export class CreateUserDto {
  @IsString()
  @MinLength(6)
  @ApiProperty()
  name: string;

  @IsString()
  @MinLength(4)
  @ApiProperty()
  username: string;

  @IsString()
  @IsOptional()
  @IsUserRole()
  @ApiProperty({ required: false })
  role: 'ADMIN' | 'APPROVAL OFFICER' | 'USER';

  @IsString()
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
  )
  @Length(8, 128)
  @ApiProperty()
  password: string;
}
