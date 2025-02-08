import { Injectable } from '@nestjs/common';
import { CreateSuperheroDTO, Superhero } from './dto/superhero.dto';
import { AppRepository } from './app.repository';

@Injectable()
export class AppService {
  constructor(private readonly repository: AppRepository) {}

  create(superheroDto: CreateSuperheroDTO): Superhero {
    return this.repository.create(superheroDto);
  }

  findAllOrderedByHumilityScore(): Superhero[] {
    return this.repository
      .findAll()
      .sort((a, b) => b.humilityScore - a.humilityScore);
  }
}
