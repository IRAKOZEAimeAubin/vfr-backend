import { Injectable } from '@nestjs/common';
import { CreateSavingDto } from './dto/create-saving.dto';
import { UpdateSavingDto } from './dto/update-saving.dto';

@Injectable()
export class SavingsService {
  create(createSavingDto: CreateSavingDto) {
    return 'This action adds a new saving';
  }

  findAll() {
    return `This action returns all savings`;
  }

  findOne(id: string) {
    return `This action returns a #${id} saving`;
  }

  update(id: string, updateSavingDto: UpdateSavingDto) {
    return `This action updates a #${id} saving`;
  }

  remove(id: string) {
    return `This action removes a #${id} saving`;
  }
}
