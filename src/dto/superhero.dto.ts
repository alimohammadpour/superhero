import { IsInt, IsNotEmpty, Max, Min } from 'class-validator';

export class CreateSuperheroDTO {
  @IsNotEmpty()
  name: string;
  superpower: string;

  @IsInt()
  @Min(1)
  @Max(10)
  humilityScore: number;
}

export interface Superhero {
  id: number;
  name: string;
  superpower: string;
  humilityScore: number;
}
