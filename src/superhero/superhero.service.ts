import { Injectable } from '@nestjs/common';
import { CreateSuperheroDTO, Superhero } from './dto/superhero.dto';
import { SuperheroRepository } from './superhero.repository';

@Injectable()
export class SuperheroService {
  constructor(private readonly repository: SuperheroRepository) {}

  create(superheroDto: CreateSuperheroDTO): Superhero {
    return this.repository.create(superheroDto);
  }

  findAllOrderedByHumilityScore(): Superhero[] {
    return this.repository
      .findAll()
      .sort((a, b) => b.humilityScore - a.humilityScore);
  }
}
