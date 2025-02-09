import { all, call, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { api } from "../api";
import { AxiosError, AxiosResponse } from "axios";
import { 
    createSuperheroFailure, 
    createSuperheroRequest, 
    createSuperheroSuccess, 
    getSuperheroesFailure, 
    getSuperheroesRequest, 
    getSuperheroesSuccess
} from "../slices/SuperheroSlice";
import { CreateSuperheroRequestType, SuperheroDataType } from "../types/SuperheroType";

export const createSuperhero = (superhero: CreateSuperheroRequestType) => 
    api.post<SuperheroDataType>(`/superheroes`, superhero);

export const getSuperheroes = () => api.get<SuperheroDataType[]>(`/superheroes`);

export function* handleCreateSuperheroRequestSaga(
    { payload }: PayloadAction<CreateSuperheroRequestType>
): Generator {
    try {
        const { data } = (yield call(createSuperhero, payload)) as AxiosResponse<SuperheroDataType>;
        yield put(createSuperheroSuccess(data));
    } catch (err: unknown) {
        const axiosError = err as AxiosError;
        const error = axiosError.response?.data as { error: string }
        yield put(createSuperheroFailure(error));
    }
}

export function* handleGetSuperheroesRequestSaga(): Generator {
    try {
        const { data } = (yield call(getSuperheroes)) as AxiosResponse<SuperheroDataType[]>;
        yield put(getSuperheroesSuccess(data));
    } catch (err: unknown) {
        const axiosError = err as AxiosError;
        const error = axiosError.response?.data as { error: string }
        yield put(getSuperheroesFailure(error));
    }
}

export function* superheroSaga() {
    yield all([
        takeLatest(createSuperheroRequest.type, handleCreateSuperheroRequestSaga),
        takeLatest(getSuperheroesRequest.type, handleGetSuperheroesRequestSaga),
    ]);
}