import { combineReducers } from 'redux'
import isLoading from './isLoading'
import route from './route'
import map from './map'
import toggler from './toggler'

const rootReducer = combineReducers({ isLoading, route, map, toggler })

export default rootReducer