import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { LoanRepaymentService } from './loan-repayment.service';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LoanRepaymentEntity } from './entities/loan-repayment.entity';

@Controller('loan-repayment')
@ApiTags('loan-repayment')
export class LoanRepaymentController {
  constructor(private readonly loanRepaymentService: LoanRepaymentService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: LoanRepaymentEntity, isArray: true })
  findAll() {
    return this.loanRepaymentService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: LoanRepaymentEntity })
  findOne(@Param('id') id: string) {
    return this.loanRepaymentService.findOne(id);
  }
}
