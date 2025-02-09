export type CreateSuperheroRequestType = {
    name: string; 
    superpower: string;
    humilityScore: number; 
};

export type SuperheroDataType = CreateSuperheroRequestType & { 
    id: number;
};