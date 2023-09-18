import { Controller, Get, Param } from '@nestjs/common';
import { LoanRepaymentService } from './loan-repayment.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('loan-repayment')
@ApiTags('loan-repayment')
export class LoanRepaymentController {
  constructor(private readonly loanRepaymentService: LoanRepaymentService) {}

  @Get()
  findAll() {
    return this.loanRepaymentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loanRepaymentService.findOne(+id);
  }
}
