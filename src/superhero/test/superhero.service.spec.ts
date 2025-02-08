import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroService } from '../superhero.service';
import { SuperheroRepository } from '../superhero.repository';
import { CreateSuperheroDTO, Superhero } from '../dto/superhero.dto';

describe('SuperheroService', () => {
  let service: SuperheroService;

  const repositoryMock = {
    create: jest.fn(),
    findAll: jest.fn().mockReturnValueOnce([]),
  };

  beforeAll(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        SuperheroService,
        {
          provide: SuperheroRepository,
          useValue: repositoryMock,
        },
      ],
    }).compile();

    service = app.get<SuperheroService>(SuperheroService);
  });

  it('should create a new superhero', () => {
    const createSuperheroDto: CreateSuperheroDTO = {
      name: 'superhero',
      superpower: 'superpower',
      humilityScore: 10,
    };

    const expectedRes: Superhero = { id: 0, ...createSuperheroDto };

    jest.spyOn(repositoryMock, 'create').mockReturnValueOnce(expectedRes);
    expect(service.create(createSuperheroDto)).toEqual(expectedRes);
  });

  it('should get superheroes', () => {
    expect(service.findAllOrderedByHumilityScore()).toEqual([]);
  });
});
