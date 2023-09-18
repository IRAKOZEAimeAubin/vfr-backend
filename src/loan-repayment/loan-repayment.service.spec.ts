import { Test, TestingModule } from '@nestjs/testing';
import { LoanRepaymentService } from './loan-repayment.service';

describe('LoanRepaymentService', () => {
  let service: LoanRepaymentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoanRepaymentService],
    }).compile();

    service = module.get<LoanRepaymentService>(LoanRepaymentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
