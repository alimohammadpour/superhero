import { all } from 'redux-saga/effects';
import { superheroSaga } from './superheroSaga';

export function* rootSaga() {
    yield all([
        superheroSaga(),
    ]);
}