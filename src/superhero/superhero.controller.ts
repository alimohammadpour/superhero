import { Body, Controller, Get, Post } from '@nestjs/common';
import { SuperheroService } from './superhero.service';
import { CreateSuperheroDTO, Superhero } from './dto/superhero.dto';

@Controller('/api/v1/superheroes/')
export class SuperheroController {
  constructor(private readonly service: SuperheroService) {}

  @Post()
  create(@Body() createSuperheroDTO: CreateSuperheroDTO): Superhero {
    return this.service.create(createSuperheroDTO);
  }

  @Get()
  findAll(): Superhero[] {
    return this.service.findAllOrderedByHumilityScore();
  }
}
