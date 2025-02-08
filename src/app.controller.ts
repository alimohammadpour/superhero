import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateSuperheroDTO, Superhero } from './dto/superhero.dto';

@Controller('/api/v1/superheroes/')
export class AppController {
  constructor(private readonly service: AppService) {}

  @Post()
  create(@Body() createSuperheroDTO: CreateSuperheroDTO): Superhero {
    return this.service.create(createSuperheroDTO);
  }

  @Get()
  findAll(): Superhero[] {
    return this.service.findAllOrderedByHumilityScore();
  }
}
