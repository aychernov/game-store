import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {authAdmin, authUser, userLoginAction, userPass,} from "../../redux/games/actions";
import {useNavigate} from "react-router-dom";
import './login-page.css'
import {Button} from "../../components/ui/buttons";

export const LoginPage = () => {

	const {userLogin, userPassword} = useSelector(state => state.AuthReducer)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [error, setError] = useState(null)

	const onClickHandle = (e) => {
		e.preventDefault()
		if (userLogin === 'admin' && userPassword === 'admin') {
			dispatch(authUser(true))
			dispatch(authAdmin(true))
			navigate('/')
		} else if(userLogin === 'user' && userPassword === 'user'){
			dispatch(authUser(true))
			dispatch(authAdmin(false))
			navigate('/')
		}
			else {
			dispatch(authUser(false))
			setError('Данные не верные!')
		}
	}

	return (
			<form className='login-page'>
				<label htmlFor="username">Введите логин</label>
				<input onChange={ (e) => dispatch(userLoginAction(e.currentTarget.value))}
							 value={userLogin} name='username'
							 type="text"
								placeholder='User name'
				/>
				<label htmlFor="userPassword">Введите пароль</label>
				<input onChange={(e) => dispatch(userPass(e.currentTarget.value))}
							 value={userPassword} name='userPassword'
							 type="password"
							 placeholder='User password'
				/>
				<Button
						className='btn btn--login'
						onClick={onClickHandle}
						to={'/'}>Login
				</Button>
				<div className='login-page__error-message'>{error}</div>
			</form>
	);
};
