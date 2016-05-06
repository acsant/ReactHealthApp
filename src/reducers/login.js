const login = (state, action) => {
	switch (action.type) {
		case 'LOGIN_USER':
			return {
				userId: action.userId,
				password: action.password
			}
		default:
			return state
	}
}
