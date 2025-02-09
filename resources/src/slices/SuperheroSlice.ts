import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CreateSuperheroRequestType, SuperheroDataType } from "../types/SuperheroType";

export type SuperheroRequestType = {
    pending: boolean;
    error: string | null;
}

export interface SuperheroState {
    create: SuperheroRequestType & {
        superhero: SuperheroDataType | null;
    },
    list: SuperheroRequestType & {
        superheroes: SuperheroDataType[] | null;
    }
}

export const initialState: SuperheroState = {
    create: {
        pending: false,
        superhero: null,
        error: null,
    },
    list: {
        pending: false,
        superheroes: null,
        error: null,
    }
}

const superheroSlice = createSlice({
    name: 'superhero',
    initialState,
    reducers: {
        createSuperheroRequest: ({ create }, { payload }: PayloadAction<CreateSuperheroRequestType>) => {
            create.pending = true
        },
        createSuperheroSuccess: ({ create }, { payload }: PayloadAction<SuperheroDataType>) => {
            create.pending = false;
            create.superhero = payload;
        },
        createSuperheroFailure: ({ create }, { payload: { error } }: PayloadAction<{error: string}>) => {
            create.pending = false;
            create.error = error;
        },
        getSuperheroesRequest: ({ list }) => {
            list.pending = true
        },
        getSuperheroesSuccess: ({ list }, { payload }: PayloadAction<SuperheroDataType[]>) => {
            list.pending = false;
            list.superheroes = payload;
        },
        getSuperheroesFailure: ({ list }, { payload: { error } }: PayloadAction<{error: string}>) => {
            list.pending = false;
            list.error = error;
        }
    }
});

export const { 
    createSuperheroRequest, 
    createSuperheroSuccess, 
    createSuperheroFailure, 
    getSuperheroesRequest, 
    getSuperheroesSuccess, 
    getSuperheroesFailure
} = superheroSlice.actions;

export default superheroSlice.reducer;