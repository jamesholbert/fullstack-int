import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'


import queryDataReducer from "./reducers/queryDataReducer"

export default createStore( 
	queryDataReducer, 
	{}, 
	applyMiddleware(thunk)
)
