import { combineReducers } from 'redux' 
import { mapReducer } from './reducers/map'
import { uiReducer } from './reducers/ui'

// COMBINED REDUCERS
const reducers = {
    map: mapReducer, 
    ui: uiReducer
}

export default combineReducers(reducers)
