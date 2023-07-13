import { PartialType } from '@nestjs/swagger';
import { CreateLoanTypeDto } from './create-loan-type.dto';

export class UpdateLoanTypeDto extends PartialType(CreateLoanTypeDto) {}
