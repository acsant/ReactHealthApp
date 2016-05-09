const initialState = {
	loggedin: false,
	registered: false
}

const loginFailed = (state=initialState, action) => {
	switch (action.type) {
		case 'LOGIN_FAILED':
			return {
				loggedin: false,
				registered: false
			}
		default:
			return state
	}
}

export default loginFailed