import {
    all,
    call,
    put,
    takeLatest,
    takeLeading
} from 'redux-saga/effects'

import {
    successFetchElementsData,
    errorFetchElementsData,
    toogleElementsListLoader,
} from './actions'

import * as actions from './actions'

import {
    getAllMakesService,
    getAllSizesService,
} from './services'

export function* getElementsData(action) {
    try {
        yield put(toogleElementsListLoader(true))
        
        var result = {}
        switch (action.payload.elementType){
            case "makes":
                result = yield call(getAllMakesService)
            case "sizes":
                result = yield call(getAllSizesService)
        }

        yield put(successFetchElementsData(result))
        yield put(toogleElementsListLoader(false))

    } catch (err) {
        error = err.response.data

        yield put(toogleElementsListLoader(false))
        yield put(errorFetchElementsData(error))
    }
}

export function* fetchElementsDataWatcher() {
    yield takeLatest(actions.FETCH_ELEMENTS_DATA, getElementsData)
}
