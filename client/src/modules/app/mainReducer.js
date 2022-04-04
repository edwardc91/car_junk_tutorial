import { combineReducers } from "redux";

import navbar from '../../components/Navbar/reducer'

export const mainReducer = combineReducers({
    navbar,
});