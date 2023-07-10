import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength, Matches, Length } from 'class-validator';

export class LoginDto {
  @IsString()
  @MinLength(4)
  @ApiProperty()
  username: string;

  @IsString()
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
  )
  @Length(8, 128)
  @ApiProperty()
  password: string;
}
