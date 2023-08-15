import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseFilters,
} from '@nestjs/common';
import { TotalSavingsService } from './total-savings.service';
import { CreateTotalSavingDto } from './dto/create-total-saving.dto';
import { UpdateTotalSavingDto } from './dto/update-total-saving.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { TotalSavingEntity } from './entities/total-saving.entity';
import { PrismaClientExceptionFilter } from 'src/prisma-client-exception/prisma-client-exception.filter';

@Controller('total-savings')
@ApiTags('total-savings')
@UseFilters(PrismaClientExceptionFilter)
export class TotalSavingsController {
  constructor(private readonly totalSavingsService: TotalSavingsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: TotalSavingEntity })
  create(@Body() createTotalSavingDto: CreateTotalSavingDto) {
    return this.totalSavingsService.create(createTotalSavingDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: TotalSavingEntity, isArray: true })
  findAll() {
    return this.totalSavingsService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: TotalSavingEntity })
  findOne(@Param('id') id: string) {
    return this.totalSavingsService.findOne(id);
  }

  @Patch(':id/approve')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: TotalSavingEntity })
  approve(
    @Param('id') id: string,
    @Body() updateTotalSavingDto: UpdateTotalSavingDto,
  ) {
    return this.totalSavingsService.approve(id, updateTotalSavingDto);
  }

  @Patch(':id/reject')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: TotalSavingEntity })
  reject(
    @Param('id') id: string,
    @Body() updateTotalSavingDto: UpdateTotalSavingDto,
  ) {
    return this.totalSavingsService.reject(id, updateTotalSavingDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: TotalSavingEntity })
  remove(@Param('id') id: string) {
    return this.totalSavingsService.remove(id);
  }
}
