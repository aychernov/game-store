import React from 'react';
import {Link} from "react-router-dom";
import {CartBlock} from "../cart-block/cart-block";
import './header.css'

export const Header = () => {
	return (
			<div className='header'>
			<div className="wrapper">
				<Link to='/' className='header__store-title'>Game Store</Link>
				<Link to='/about' className='header__store-title'>О магазине</Link>
			</div>
				<div className="wrapper header__cart-btn-wrapper">
					<CartBlock/>
				</div>
			</div>
	);
};


