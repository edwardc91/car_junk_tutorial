import * as actions from './actions'

const initialState = {
  currentKey: "makes",
}

const navbar = (state = initialState, action) => {
    switch (action.type) {
      case actions.SET_NAV_MENU:
        return Object.assign({}, state, {
          currentKey: action.payload.menuKey,
        })
  
      default:
        return state
    }
  }
  
  export default navbar