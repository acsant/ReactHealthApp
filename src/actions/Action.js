export const userLogin = (userId, password) => {
	return {
		type: 'LOGIN_USER',
		userId,
		password
	}
}