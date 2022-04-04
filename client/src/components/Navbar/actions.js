import { action } from '../../helpers/actionCreator'

export const SET_NAV_MENU = 'SET_NAV_MENU'

export const setNavMenu = ( menuKey ) => action(SET_NAV_MENU, { menuKey })