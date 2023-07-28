import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TotalSavingsService } from './total-savings.service';
import { CreateTotalSavingDto } from './dto/create-total-saving.dto';
import { UpdateTotalSavingDto } from './dto/update-total-saving.dto';

@Controller('total-savings')
export class TotalSavingsController {
  constructor(private readonly totalSavingsService: TotalSavingsService) {}

  @Post()
  create(@Body() createTotalSavingDto: CreateTotalSavingDto) {
    return this.totalSavingsService.create(createTotalSavingDto);
  }

  @Get()
  findAll() {
    return this.totalSavingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.totalSavingsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTotalSavingDto: UpdateTotalSavingDto,
  ) {
    return this.totalSavingsService.update(+id, updateTotalSavingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.totalSavingsService.remove(+id);
  }
}
