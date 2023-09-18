import { Test, TestingModule } from '@nestjs/testing';
import { LoanRepaymentController } from './loan-repayment.controller';
import { LoanRepaymentService } from './loan-repayment.service';

describe('LoanRepaymentController', () => {
  let controller: LoanRepaymentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoanRepaymentController],
      providers: [LoanRepaymentService],
    }).compile();

    controller = module.get<LoanRepaymentController>(LoanRepaymentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
