import React from 'react';
import {CartBlock} from "../cart-block";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {authAdmin, authUser} from "../../redux/games/actions";
import './header.css'

export const Header: React.FC = () => {

	const {userAuth} = useTypedSelector(state => state.AuthReducer)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const logOutHandle = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault()
		if (userAuth) {
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


