import {Test, TestingModule} from '@nestjs/testing';
import {FixUserController} from '../fix-user.controller';
import {FixUserService} from '../fix-user.service';

describe('FixUserController', () => {
  let controller: FixUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FixUserController],
      providers: [FixUserService],
    }).compile();

    controller = module.get<FixUserController>(FixUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
