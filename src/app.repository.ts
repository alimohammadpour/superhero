import { CreateSuperheroDTO, Superhero } from './dto/superhero.dto';

export class AppRepository {
  private superheroes: Superhero[] = []; // In-memory database

  create(superhero: CreateSuperheroDTO): Superhero {
    const superheroInstance: Superhero = {
      id: this.superheroes.length,
      ...superhero,
    };
    this.superheroes.push(superheroInstance);
    return superheroInstance;
  }

  findAll(): Superhero[] {
    return this.superheroes;
  }
}
