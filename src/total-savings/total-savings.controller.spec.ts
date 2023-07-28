import { Test, TestingModule } from '@nestjs/testing';
import { TotalSavingsController } from './total-savings.controller';
import { TotalSavingsService } from './total-savings.service';

describe('TotalSavingsController', () => {
  let controller: TotalSavingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TotalSavingsController],
      providers: [TotalSavingsService],
    }).compile();

    controller = module.get<TotalSavingsController>(TotalSavingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
