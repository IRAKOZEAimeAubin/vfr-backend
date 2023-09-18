import { Controller, Get, Param, UseGuards, UseFilters } from '@nestjs/common';
import { SavingsService } from './savings.service';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PrismaClientExceptionFilter } from 'src/prisma-client-exception/prisma-client-exception.filter';
import { SavingsEntity } from './entities/saving.entity';

@Controller('savings')
@ApiTags('savings')
@UseFilters(PrismaClientExceptionFilter)
export class SavingsController {
  constructor(private readonly savingsService: SavingsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: SavingsEntity, isArray: true })
  findAll() {
    return this.savingsService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: SavingsEntity })
  findOne(@Param('id') id: string) {
    return this.savingsService.findOne(id);
  }
}
