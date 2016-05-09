const initialState = {
	loggedin: false,
	registered: false
}

const validate = (state=initialState, action) => {
	switch(action.type) {
		case 'VALIDATE_USER':
			return registered(action.userId)
		default:
			return state
	}
}

function registered (userId) {
	if (this.userId == "jeff_aramini@ihealthsolutions.net") {
		return {
			loggedin: false,
			registered: true
		}
	}

	return {
		loggedin: false,
		registered: false
	}

}

export default validate