const initialState = {
	loggedin: false,
	registered: true
}

function validated(username, password) {
	if (username == "jeff_aramini@ihealthsolutions.net" &&
		password == "focus21") {
		return {
			loggedin: true,
			registered: true
		}
	}
}

const login = (state=initialState, action) => {
	switch (action.type) {
		case 'LOGIN_USER':
			return validated(action.userId, action.password)
		default:
			return state
	}
}

export default login
