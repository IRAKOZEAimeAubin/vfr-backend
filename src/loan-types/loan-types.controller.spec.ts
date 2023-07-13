import { Test, TestingModule } from '@nestjs/testing';
import { LoanTypesController } from './loan-types.controller';
import { LoanTypesService } from './loan-types.service';

describe('LoanTypesController', () => {
  let controller: LoanTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoanTypesController],
      providers: [LoanTypesService],
    }).compile();

    controller = module.get<LoanTypesController>(LoanTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
