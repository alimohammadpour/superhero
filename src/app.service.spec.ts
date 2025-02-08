import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { CreateSuperheroDTO, Superhero } from './dto/superhero.dto';
import { AppRepository } from './app.repository';

describe('AppService', () => {
  let service: AppService;

  const repositoryMock = {
    create: jest.fn(),
    findAll: jest.fn(),
  };

  beforeAll(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        AppService,
        {
          provide: AppRepository,
          useValue: repositoryMock,
        },
      ],
    }).compile();

    service = app.get<AppService>(AppService);
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
});
