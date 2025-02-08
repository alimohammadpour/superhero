import { RepositoryInterface } from 'src/interfaces/repository.interface';
import { CreateSuperheroDTO, Superhero } from './dto/superhero.dto';

export class SuperheroRepository implements RepositoryInterface<Superhero> {
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
