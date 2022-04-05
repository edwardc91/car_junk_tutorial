import {
    call,
    put,
    takeLatest,
} from 'redux-saga/effects'

import {
    successFetchElementsData,
    errorFetchElementsData,
    successFetchElementData,
    errorFetchElementData,
    toogleElementsListLoader,
    toogleElementLoader,
    successDeleteElement,
    errorDeleteElement,
    successCreateElement,
    errorCreateElement,
    successEditElement,
    errorEditElement
} from './actions'

import * as actions from './actions'

import {
    getAllMakesService,
    getAllSizesService,
    getAllBodysService,
    getMakeService,
    getSizeService,
    deleteMakeService,
    deleteSizeService,
    addMakeService,
    addSizeService,
    updateMakeService,
    updateSizeService,
} from './services'

export function* getElementsData(action) {
    try {
        yield put(toogleElementsListLoader(true))
        
        var result = null
        switch (action.payload.elementType){
            case "body":
                result = yield call(getAllBodysService)
                break
            case "sizes":
                result = yield call(getAllSizesService)
                break
            default:
                result = yield call(getAllSizesService)
        }

        yield put(successFetchElementsData(result))
        yield put(toogleElementsListLoader(false))

    } catch (err) {
        if (err.response.data){
            console.log(err.response.data)
            const error = err.response.data

            yield put(toogleElementsListLoader(false))
            yield put(errorFetchElementsData(error))
        }
    }
}

export function* getElementData(action) {
    try {
        yield put(toogleElementLoader(true))
        
        var result = {}
        const element_id = action.payload.id
        switch (action.payload.elementType){
            case "makes":
                result = yield call(getMakeService, element_id)
            case "sizes":
                result = yield call(getSizeService, element_id)
        }

        yield put(successFetchElementData(result))
        yield put(toogleElementLoader(false))

    } catch (err) {
        const error = err.response.data

        yield put(toogleElementLoader(false))
        yield put(errorFetchElementData(error))
    }
}

export function* deleteElement(action) {
    try {

        const element_id = action.payload.element_id

        switch (action.payload.elementType){
            case "makes":
                yield call(deleteMakeService, element_id)
            case "sizes":
                yield call(deleteSizeService, element_id)
        }

        yield put(successDeleteElement(element_id))

    } catch (err) {
        const error = err.response.data

        yield put(errorDeleteElement(error))
    }
}

export function* fetchElementsDataWatcher() {
    yield takeLatest(actions.FETCH_ELEMENTS_DATA, getElementsData)
}

export function* fetchElementDataWatcher() {
    yield takeLatest(actions.FETCH_ELEMENT_DATA, getElementData)
}

export function* deleteElementWatcher() {
    // todo: Use maybe a take that execute all petitions
    yield takeLatest(actions.DELETE_ELEMENT, deleteElement)
}
