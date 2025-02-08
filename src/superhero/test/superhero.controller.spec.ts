import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroController } from '../superhero.controller';
import { SuperheroService } from '../superhero.service';
import { CreateSuperheroDTO, Superhero } from '../dto/superhero.dto';

describe('SuperheroController', () => {
  let controller: SuperheroController;

  const serviceMock = {
    create: jest.fn(),
    findAllOrderedByHumilityScore: jest.fn().mockReturnValueOnce([]),
  };

  beforeAll(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroController],
      providers: [
        {
          provide: SuperheroService,
          useValue: serviceMock,
        },
      ],
    }).compile();

    controller = app.get<SuperheroController>(SuperheroController);
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
