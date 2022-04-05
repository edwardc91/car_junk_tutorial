import * as actions from './actions'

const initialState = {
    elements: [],
    currentElementData: null,
    loadingModule: true,
    disableGeneralControls: false,
    error: null
}

const elementManagment = (state = initialState, action) => {
    switch (action.type) {
        case actions.SUCCESS_FETCH_ELEMENTS_DATA:
            return Object.assign({}, state, {
                elements: action.payload.elementsData,
            })
        case actions.TOOGLE_ELEMENTS_LIST_LOADER:
            return Object.assign({}, state, {
                loadingModule: action.payload.flag,
            })

        case actions.ERROR_FETCH_ELEMENTS_DATA:
            return Object.assign({}, state, {
                error: action.payload.error,
            })

        default:
            return state
    }
}

export default elementManagment