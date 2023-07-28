import { Test, TestingModule } from '@nestjs/testing';
import { TotalSavingsService } from './total-savings.service';

describe('TotalSavingsService', () => {
  let service: TotalSavingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TotalSavingsService],
    }).compile();

    service = module.get<TotalSavingsService>(TotalSavingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
