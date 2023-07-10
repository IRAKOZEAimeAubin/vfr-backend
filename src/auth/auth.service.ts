import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AuthEntity } from './entities/auth.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async login(username: string, password: string): Promise<AuthEntity> {
    const user = await this.prisma.user.findUnique({ where: { username } });

    if (!user) {
      throw new NotFoundException(`No user found with username: ${username}`);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException(`Invalid password. Please try again!`);
    }

    return {
      accessToken: this.jwtService.sign({
        userId: user.id,
        name: user.name,
        role: user.role,
      }),
    };
  }
}
