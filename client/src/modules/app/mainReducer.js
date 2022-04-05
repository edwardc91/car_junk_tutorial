import { combineReducers } from "redux";

import navbar from '../../components/Navbar/reducer'
import elementManagment from '../ElementManagment/reducer'

export const mainReducer = combineReducers({
    navbar,
    elementManagment,
});