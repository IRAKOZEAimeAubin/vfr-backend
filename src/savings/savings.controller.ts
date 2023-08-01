import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseFilters,
} from '@nestjs/common';
import { SavingsService } from './savings.service';
import { UpdateSavingDto } from './dto/update-saving.dto';
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

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: SavingsEntity })
  update(@Param('id') id: string, @Body() updateSavingDto: UpdateSavingDto) {
    return this.savingsService.update(id, updateSavingDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: SavingsEntity })
  remove(@Param('id') id: string) {
    return this.savingsService.remove(id);
  }
}
