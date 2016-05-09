export const userLogin = (userId, password) => {
	return {
		type: 'LOGIN_USER',
		userId,
		password
	}
}

export const loginFail = (userId, password) => {
	return {
		type: 'LOGIN_FAILED',
		userId,
		password
	}
}

export const validate = (userId, password) => {
	return {
		type: 'VALIDATE_USER',
		userId,
		password
	}
}