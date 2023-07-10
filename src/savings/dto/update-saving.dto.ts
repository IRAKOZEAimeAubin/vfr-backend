import { PartialType } from '@nestjs/swagger';
import { CreateSavingDto } from './create-saving.dto';

export class UpdateSavingDto extends PartialType(CreateSavingDto) {}
