import { ApiProperty } from '@nestjs/swagger';

export class AuthEntity {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  username: string;
  @ApiProperty()
  accessToken: string;
}
