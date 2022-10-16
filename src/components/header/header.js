import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {CartBlock} from "../cart-block/cart-block";
import './header.css'
import {useDispatch, useSelector} from "react-redux";
import {authAdmin, authUser} from "../../redux/games/actions";

export const Header = () => {
	const {userAuth} = useSelector(state => state.AuthReducer)

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const logOutHandle = (e) => {
		e.preventDefault()
		if (userAuth === true) {
			dispatch(authUser(false))
			dispatch(authAdmin(false))
			navigate('/')
		}
	}

	return (
			<div className='header'>
			<div className="wrapper">
				<Link to='/' className='header__store-title'>Game Store</Link>
				<Link to='/about' className='header__store-title'>О магазине</Link>
			</div>
				<div className="wrapper header__cart-btn-wrapper">
					{userAuth ? <Link
							onClick={logOutHandle}
							to='/about'
							className='header__store-title'>Выход</Link> : null }
					{ userAuth ? <CartBlock/> : null}
				</div>
			</div>
	);
};


