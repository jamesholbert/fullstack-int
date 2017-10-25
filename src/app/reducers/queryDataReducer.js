const queryDataReducer = (state = {
	response: {}
}, action) => {
	switch (action.type) {
		case "QUERY_DATA":
			state = {
				...state,
				response: action.payload
			}
			break
	}
	return state
}


export default queryDataReducer 