import { Test, TestingModule } from '@nestjs/testing';
import { LoanTypesService } from './loan-types.service';

describe('LoanTypesService', () => {
  let service: LoanTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoanTypesService],
    }).compile();

    service = module.get<LoanTypesService>(LoanTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
