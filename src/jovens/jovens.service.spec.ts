import { Test, TestingModule } from '@nestjs/testing';
import { JovensService } from './jovens.service';

describe('JovensService', () => {
  let service: JovensService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JovensService],
    }).compile();

    service = module.get<JovensService>(JovensService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
