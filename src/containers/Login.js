import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

let Login = ({ dispatch }) => {
	let username, password

	return (
		<div>
			<form onSubmit={e => {
				e.preventDefault()
				if (!input.value.trim()) {
					return
				}
				dispatch(login(username.value, password.value))
				username.value = ''
				password.value = ''
			}}>
				<input ref={node => {
					username = node
				}} />
				<input ref={node => {
					password = node
				}} />
				<button type="submit">
					Login
				</button>
			</form>
		</div>
	)
}

Login = connect()(Login)

export default Login