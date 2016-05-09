import React from 'react';
import { connect } from 'react-redux';
import { userLogin, validate } from '../actions/Action';
require('./_Login.scss');
require('react-bootstrap');
var Bttn = require('react-bootstrap/lib/Button');
let Login = ({ dispatch }) => {
	let username, password

	return (
		<div>
			<form className='form' onSubmit={e => {
				e.preventDefault()
				if (!username.value.trim()) {
					return
				}

				var pass = document.getElementById('pass')
				if (password.value != "focus21") {
					pass.style.backgroundColor = "red"
					return
				} else {
					pass.style.backgroundColor = "white"
				}
				dispatch(userLogin(username.value, password.value))
				username.value = ''
				password.value = ''
			}}>

				<img id="pic" className='img--small' src={require('../../images/jeff.png')} />
				
				<label id="name" className='info info--bold'>Jeffery Aramini</label>
				<label id="email" className='info info--small'>jeff_aramini@ihealthsolutions.net</label>
				
				<input id="user" type="email" placeholder="EMAIL" className='input input__email input--darkblueborder' ref={node => {
					username = node
				}} />
				<input id="pass" type="password" placeholder="PASSWORD" className='input input__password input--darkblueborder' onFocus={e=>{
					e.preventDefault()
					if (username.value == "jeff_aramini@ihealthsolutions.net") {
						var pic = document.getElementById('pic')
						var email = document.getElementById('email')
						var name = document.getElementById('name')
						var user = document.getElementById('user')
						email.style.visibility = "visible"
						name.style.visibility = "visible"
						pic.style.visibility = "visible"
						user.style.visibility = "hidden"

					}
				}} ref={node => {
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