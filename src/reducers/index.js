import { combineReducers } from 'redux'
import isLoading from './isLoading'
import routeType from './routeType'

const rootReducer = combineReducers({ isLoading, routeType })
export default rootReducer