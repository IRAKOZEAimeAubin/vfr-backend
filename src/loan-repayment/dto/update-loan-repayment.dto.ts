import { PartialType } from '@nestjs/swagger';
import { CreateLoanRepaymentDto } from './create-loan-repayment.dto';

export class UpdateLoanRepaymentDto extends PartialType(CreateLoanRepaymentDto) {}
