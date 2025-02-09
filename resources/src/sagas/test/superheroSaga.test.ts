import { all, call, Effect, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";
import { createSuperhero, handleCreateSuperheroRequestSaga, handleGetSuperheroesRequestSaga, superheroSaga } from "../superheroSaga";
import { createSuperheroFailure, createSuperheroRequest, createSuperheroSuccess, getSuperheroesRequest } from "../../slices/SuperheroSlice";
import { CreateSuperheroRequestType, SuperheroDataType } from "../../types/SuperheroType";

jest.mock('axios');
describe('superheroSaga', () => {
  it('should be defined', () => expect(superheroSaga).toBeDefined());

  it('should take latest', () => {
    const generator: Generator = superheroSaga();

    const createSuperheroRequestEffect: Effect = takeLatest(
        createSuperheroRequest.type,
        handleCreateSuperheroRequestSaga
    );

    const getSuperheroesRequestEffect: Effect = takeLatest(
        getSuperheroesRequest.type,
        handleGetSuperheroesRequestSaga
    );

    expect(generator.next().value).toEqual(all([createSuperheroRequestEffect, getSuperheroesRequestEffect]));
    expect(generator.next()).toEqual({ done: true, value: undefined });
  });

  describe('handle create a superhero request saga', () => {
    const payload: CreateSuperheroRequestType = {
      name         : '',
      superpower   : '',
      humilityScore: 1
    };
    const action: PayloadAction<CreateSuperheroRequestType> = {
      type: createSuperheroRequest.type,
      payload
    }
    const generator: Generator = handleCreateSuperheroRequestSaga(action);

    it('try', () => {
      const createSuperheroCallEffect: Effect = call(createSuperhero, payload);
      const data: SuperheroDataType = {
        id: 0,
        ...payload
      };
      const createSuperheroSuccessPutEffect: Effect = put(createSuperheroSuccess(data));

      expect(generator.next().value).toEqual(createSuperheroCallEffect);
      expect(generator.next({ data }).value).toEqual(createSuperheroSuccessPutEffect);
    });

    it('catch', () => {
      const data: { error: string } = { error: '' };
      const createSuperheroFailurePutEffect: Effect = put(createSuperheroFailure(data));
      const error = { response: { data } as AxiosResponse } as AxiosError
      expect(generator.throw(error).value).toEqual(createSuperheroFailurePutEffect);
      expect(generator.next()).toEqual({ done: true, value: undefined });
    });
  });
});