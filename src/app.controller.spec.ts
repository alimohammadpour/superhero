import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateSuperheroDTO, Superhero } from './dto/superhero.dto';

describe('AppController', () => {
  let controller: AppController;

  const serviceMock = {
    create: jest.fn(),
    findAllOrderedByHumilityScore: jest.fn().mockReturnValueOnce([]),
  };

  beforeAll(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: serviceMock,
        },
      ],
    }).compile();

    controller = app.get<AppController>(AppController);
  });

  it('should create a new superhero', () => {
    const reqBody: CreateSuperheroDTO = {
      name: 'superhero',
      superpower: 'superpower',
      humilityScore: 10,
    };

    const expectedRes: Superhero = { id: 0, ...reqBody };

    jest.spyOn(serviceMock, 'create').mockReturnValueOnce(expectedRes);
    expect(controller.create(reqBody)).toEqual(expectedRes);
  });

  it('should get superheroes', () => {
    expect(controller.findAll()).toEqual([]);
  });
});
