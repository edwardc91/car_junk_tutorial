import { all } from "redux-saga/effects";

import * as watchersElementManagment from '../ElementManagment/saga'

export function* mainSaga() {
  yield all([
    // watchers element managment
    watchersElementManagment.fetchElementsDataWatcher(),
  ]);
}