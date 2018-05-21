import { takeEvery } from "redux-saga/effects";

import {
  SWAP_CURRENCY,
  CHANGE_BASE_CURRENCY,
  GET_INITIAL_CONVERSION
} from "../actions/currencies";

function* fetchLastestConversionRates(action) {
  console.log("TODO: update the thing.", action);
  yield;
}

export default function* rootSaga() {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLastestConversionRates);
  yield takeEvery(SWAP_CURRENCY, fetchLastestConversionRates);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLastestConversionRates);
}
