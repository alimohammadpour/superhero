import { Module } from '@nestjs/common';
import { SuperheroController } from './superhero.controller';
import { SuperheroService } from './superhero.service';
import { SuperheroRepository } from './superhero.repository';

@Module({
  imports: [],
  controllers: [SuperheroController],
  providers: [SuperheroService, SuperheroRepository],
})
export class SuperheroModule {}
