import { PartialType } from '@nestjs/swagger';
import { CreateTotalSavingDto } from './create-total-saving.dto';

export class UpdateTotalSavingDto extends PartialType(CreateTotalSavingDto) {}
