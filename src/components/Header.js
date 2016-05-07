import React from 'react';

require('./_Header.scss');

const Header = () => (
	<div className='img'>
		<img className= 'img__header' src={require('../../images/header.svg')} />
	</div>

)

export default Header