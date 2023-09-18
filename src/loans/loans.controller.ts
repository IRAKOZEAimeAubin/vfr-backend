import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { LoansService } from './loans.service';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('loans')
@ApiTags('loans')
export class LoansController {
  constructor(private readonly loansService: LoansService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  create(@Body() createLoanDto: CreateLoanDto, @Request() request) {
    const authenticatedUser = request.user;
    createLoanDto.creatorId = authenticatedUser.id;
    return this.loansService.create(createLoanDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  findAll() {
    return this.loansService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  findOne(@Param('id') id: string) {
    return this.loansService.findOne(id);
  }

  @Patch(':id/approve')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  approve(
    @Param('id') id: string,
    @Body() updateLoanDto: UpdateLoanDto,
    @Request() request,
  ) {
    const authenticatedUser = request.user;
    updateLoanDto.approvalOfficerId = authenticatedUser.id;
    return this.loansService.approve(id, updateLoanDto);
  }

  @Patch(':id/reject')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  reject(
    @Param('id') id: string,
    @Body() updateLoanDto: UpdateLoanDto,
    @Request() request,
  ) {
    const authenticatedUser = request.user;
    updateLoanDto.approvalOfficerId = authenticatedUser.id;
    return this.loansService.reject(id, updateLoanDto);
  }

  @Patch(':id/restructure')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  restructure(@Param('id') id: string, @Body() updateLoanDto: UpdateLoanDto) {
    return this.loansService.restructure(id, updateLoanDto);
  }

  @Patch(':id/topup')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  topUp(@Param('id') id: string, @Body() updateLoanDto: UpdateLoanDto) {
    return this.loansService.topUp(id, updateLoanDto);
  }

  @Patch(':id/payoff')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  payOff(@Param('id') id: string, @Body() updateLoanDto: UpdateLoanDto) {
    return this.loansService.payOff(id, updateLoanDto);
  }

  @Patch(':id/addqcl')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  addQCL(@Param('id') id: string, @Body() updateLoanDto: UpdateLoanDto) {
    return this.loansService.addQCL(id, updateLoanDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  remove(@Param('id') id: string) {
    return this.loansService.remove(id);
  }
}
