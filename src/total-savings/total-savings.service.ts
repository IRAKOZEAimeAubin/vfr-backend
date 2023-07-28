import { Injectable } from '@nestjs/common';
import { CreateTotalSavingDto } from './dto/create-total-saving.dto';
import { UpdateTotalSavingDto } from './dto/update-total-saving.dto';

@Injectable()
export class TotalSavingsService {
  create(createTotalSavingDto: CreateTotalSavingDto) {
    return 'This action adds a new totalSaving';
  }

  findAll() {
    return `This action returns all totalSavings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} totalSaving`;
  }

  update(id: number, updateTotalSavingDto: UpdateTotalSavingDto) {
    return `This action updates a #${id} totalSaving`;
  }

  remove(id: number) {
    return `This action removes a #${id} totalSaving`;
  }
}
