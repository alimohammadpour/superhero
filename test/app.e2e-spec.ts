import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
import { CreateSuperheroDTO } from 'src/dto/superhero.dto';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;
  const url: string = '/api/v1/superheroes/';

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Create a new superhero', async () => {
    const body: CreateSuperheroDTO = {
      name: 'superhero',
      superpower: 'superpower',
      humilityScore: 10,
    };

    const response = await request(app.getHttpServer())
      .post(url)
      .send(body)
      .expect(201);

    expect(response.body).toEqual({
      id: 0,
      ...body,
    });
  });
});
