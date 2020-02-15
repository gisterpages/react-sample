import userReducer from './reducers/userReducer';
import { createStore , combineReducers } from 'redux'

const reducers = {
    user: userReducer
}
const store = createStore(combineReducers(reducers))

export default store