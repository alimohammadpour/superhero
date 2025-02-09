import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from './sagas/rootSaga';
import superheroReducer from "./slices/SuperheroSlice";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {
        superhero: superheroReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;