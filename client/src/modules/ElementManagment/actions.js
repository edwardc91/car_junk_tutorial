import { action } from '../../helpers/actionCreator'

// constants
export const FETCH_ELEMENTS_DATA = 'FETCH_ELEMENTS_DATA'
export const SUCCESS_FETCH_ELEMENTS_DATA = 'SUCCESS_FETCH_ELEMENTS_DATA'
export const ERROR_FETCH_ELEMENTS_DATA = 'ERROR_FETCH_ELEMENTS_DATA'

export const FETCH_ELEMENT_DATA = 'FETCH_ELEMENT_DATA'
export const SUCCESS_FETCH_ELEMENT_DATA = 'SUCCESS_FETCH_ELEMENT_DATA'
export const ERROR_FETCH_ELEMENT_DATA = 'ERROR_FETCH_ELEMENT_DATA'

export const CREATE_ELEMENT = 'CREATE_ELEMENT'
export const SUCCESS_CREATE_ELEMENT = 'SUCCESS_CREATE_ELEMENT'
export const ERROR_CREATE_ELEMENT = 'ERROR_CREATE_ELEMENT'

export const DELETE_ELEMENT = 'DELETE_ELEMENT'
export const SUCCESS_DELETE_ELEMENT = 'SUCCESS_DELETE_ELEMENT'
export const ERROR_DELETE_ELEMENT = 'ERROR_DELETE_ELEMENT'

export const EDIT_ELEMENT = 'EDIT_ELEMENT'
export const SUCCESS_EDIT_ELEMENT = 'SUCCESS_EDIT_ELEMENT'
export const ERROR_EDIT_ELEMENT = 'ERROR_EDIT_ELEMENT'

export const TOOGLE_ELEMENTS_LIST_LOADER = 'TOOGLE_ELEMENTS_LIST_LOADER'
export const TOOGLE_ELEMENT_LOADER = 'TOOGLE_ELEMENT_LOADER'

//actions
export const fetchElementsData = elementType => action(FETCH_ELEMENTS_DATA, { elementType })
export const successFetchElementsData = ( elementsData ) => action(SUCCESS_FETCH_ELEMENTS_DATA, { elementsData })
export const errorFetchElementsData = error => action(ERROR_FETCH_ELEMENTS_DATA, { error })

export const fetchElementData = ( elementType, id ) => action(FETCH_ELEMENT_DATA, { elementType, id })
export const successFetchElementData = ( elementData ) => action(SUCCESS_FETCH_ELEMENT_DATA, { elementData })
export const errorFetchElementData = error => action(ERROR_FETCH_ELEMENT_DATA, { error })

export const createElement = ( elementData, elementType ) => action(CREATE_ELEMENT, { elementData, elementType })
export const successCreateElement = ( elementData ) => action(SUCCESS_CREATE_ELEMENT, { elementData })
export const errorCreateElement = error => action(ERROR_CREATE_ELEMENT, { error })

export const deleteElement = ( id, elementType ) => action(DELETE_ELEMENT, { id, elementType })
export const successDeleteElement = ( id ) => action(SUCCESS_DELETE_ELEMENT, { id })
export const errorDeleteElement = error => action(ERROR_DELETE_ELEMENT, { error })

export const editElement = ( elementData, elementType, id ) => action(EDIT_ELEMENT, { elementData, elementType, id })
export const successEditElement = ( elementData ) => action(SUCCESS_EDIT_ELEMENT, { elementData })
export const errorEditElement = error => action(ERROR_EDIT_ELEMENT, { error })

export const toogleElementsListLoader = ( flag ) => action(TOOGLE_ELEMENTS_LIST_LOADER, { flag })
export const toogleElementLoader = ( flag ) => action(TOOGLE_ELEMENT_LOADER, { flag })