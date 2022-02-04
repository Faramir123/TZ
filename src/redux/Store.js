import { combineReducers, createStore } from 'redux'
import { EmployeesReducer } from './Reducers/EmployeesReducer'
import {listItemReducer} from './Reducers/ListItemReducer'

const rootReducer = combineReducers({
    spisok: listItemReducer,
    employees: EmployeesReducer,
    
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)