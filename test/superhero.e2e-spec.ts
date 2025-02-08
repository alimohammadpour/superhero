import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../src/app.module';
import { CreateSuperheroDTO } from 'src/superhero/dto/superhero.dto';
import TestAgent from 'supertest/lib/agent';

describe('SuperheroController (e2e)', () => {
  let app: INestApplication<App>;
  let server: TestAgent;
  const url: string = '/api/v1/superheroes/';

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());

    server = request(app.getHttpServer());
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('Create a new superhero', async () => {
    const body: CreateSuperheroDTO = {
      name: 'superhero',
      superpower: 'superpower',
      humilityScore: 10,
    };

    const response = await server.post(url).send(body).expect(201);
    expect(response.body).toEqual({
      id: 0,
      ...body,
    });
  });

  it('Should not create with a humility score greater than 10', async () => {
    const body: CreateSuperheroDTO = {
      name: 'superhero',
      superpower: 'superpower',
      humilityScore: 15,
    };

    await server.post(url).send(body).expect(400);
  });
});
