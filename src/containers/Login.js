import React from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../actions/Action';
require('./_Login.scss');
require('react-bootstrap');
var Bttn = require('react-bootstrap/lib/Button');
let Login = ({ dispatch }) => {
	let username, password

	return (
		<div>
			<form className='form' onSubmit={e => {
				e.preventDefault()
				if (!input.value.trim()) {
					return
				}
				dispatch(login(username.value, password.value))
				username.value = ''
				password.value = ''
			}}>

				<input type="email" placeholder="EMAIL" className='input input__email input--darkblueborder' ref={node => {
					username = node
				}} />
				<input type="password" placeholder="PASSWORD" className='input input__password input--darkblueborder' ref={node => {
					password = node
				}} />
				<Bttn type="submit" bsStyle="primary" className='btn input__next input--darkblueborder btn-primary'>
					Next
				</Bttn>
			</form>
		</div>
	)
}

Login = connect()(Login)

export default Login