import { Test, TestingModule } from '@nestjs/testing';
import { JovensController } from './jovens.controller';
import { JovensService } from './jovens.service';

describe('JovensController', () => {
  let controller: JovensController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JovensController],
      providers: [JovensService],
    }).compile();

    controller = module.get<JovensController>(JovensController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
