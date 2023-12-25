import { Test, TestingModule } from '@nestjs/testing';
import { FixUserService } from './fix-user.service';

describe('FixUserService', () => {
  let service: FixUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FixUserService],
    }).compile();

    service = module.get<FixUserService>(FixUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
