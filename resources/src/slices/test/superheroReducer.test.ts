import { CreateSuperheroRequestType, SuperheroDataType } from '../../types/SuperheroType';
import superheroReducer, { createSuperheroFailure, createSuperheroRequest, createSuperheroSuccess, getSuperheroesFailure, getSuperheroesRequest, getSuperheroesSuccess, initialState, SuperheroState } from '../SuperheroSlice';

describe('superheroReducer', () => {
    it('should be defined', () => expect(superheroReducer).toBeDefined());
  
    it("should return the initial state", () => {
        expect(superheroReducer(undefined, { type: ''})).toEqual(initialState);
    });

    it('create a superhero request', () => {
        const requestBody: CreateSuperheroRequestType = {
            name: 'name',
            superpower: 'superpower',
            humilityScore: 1,
        };
        const requestState = superheroReducer(initialState, createSuperheroRequest(requestBody));
        const createState: SuperheroState['create'] = {
            pending: true,
            superhero: null,
            error: null
        };

        expect(requestState).toEqual({ ...initialState, create: createState });
    });

    it('create a superhero success', () => {
        const superhero: SuperheroDataType = {
            id: 0,
            name: 'name',
            superpower: 'superpower',
            humilityScore: 1,
        };
        const successState = superheroReducer(initialState, createSuperheroSuccess(superhero));
        const createState: SuperheroState['create'] = {
            pending: false,
            error: null,
            superhero,
        };

        expect(successState).toEqual({ ...initialState, create: createState });
    });

    it('create a superhero failure', () => {
        const failureState = superheroReducer(initialState, createSuperheroFailure({ error: '' }));
        const createState: SuperheroState['create'] = {
            pending: false,
            superhero: null,
            error: '',
        };

        expect(failureState).toEqual({ ...initialState, create: createState });
    });

    it('get superheroes request', () => {
        const requestState = superheroReducer(initialState, getSuperheroesRequest());
        const listState: SuperheroState['list'] = {
            pending: true,
            superheroes: null,
            error: null
        };

        expect(requestState).toEqual({ ...initialState, list: listState });
    });

    it('get superheroes success', () => {
        const superheroes: SuperheroDataType[] = [
            {
                id: 0,
                name: 'name',
                superpower: 'superpower',
                humilityScore: 1,
            }
        ];
        const successState = superheroReducer(initialState, getSuperheroesSuccess(superheroes));
        const listState: SuperheroState['list'] = {
            pending: false,
            error: null,
            superheroes
        };

        expect(successState).toEqual({ ...initialState, list: listState });
    });

    it('get superheroes failure', () => {
        const failureState = superheroReducer(initialState, getSuperheroesFailure({ error: '' }));
        const listState: SuperheroState['list'] = {
            pending: false,
            error: '',
            superheroes: null
        };

        expect(failureState).toEqual({ ...initialState, list: listState });
    });
  });
  