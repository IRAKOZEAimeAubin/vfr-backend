import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { LoanTypesService } from './loan-types.service';
import { CreateLoanTypeDto } from './dto/create-loan-type.dto';
import { UpdateLoanTypeDto } from './dto/update-loan-type.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { PrismaClientExceptionFilter } from 'src/prisma-client-exception/prisma-client-exception.filter';
import { LoanTypeEntity } from './entities/loan-type.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('loan-types')
@ApiTags('loan-types')
@UseFilters(PrismaClientExceptionFilter)
export class LoanTypesController {
  constructor(private readonly loanTypesService: LoanTypesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: LoanTypeEntity })
  create(@Body() createLoanTypeDto: CreateLoanTypeDto) {
    return this.loanTypesService.create(createLoanTypeDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: LoanTypeEntity, isArray: true })
  findAll() {
    return this.loanTypesService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: LoanTypeEntity })
  findOne(@Param('id') id: string) {
    return this.loanTypesService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: LoanTypeEntity })
  update(
    @Param('id') id: string,
    @Body() updateLoanTypeDto: UpdateLoanTypeDto,
  ) {
    return this.loanTypesService.update(id, updateLoanTypeDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: LoanTypeEntity })
  remove(@Param('id') id: string) {
    return this.loanTypesService.remove(id);
  }
}
