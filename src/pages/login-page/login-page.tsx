import React, {useState} from 'react';
import {Button} from "../../components/ui/buttons";
import {useNavigate} from "react-router-dom";
import {authAdmin, authUser, userLoginAction, userPass,} from "../../redux/games/actions";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import './login-page.css'


export const LoginPage: React.FC = () => {

	const [error, setError] = useState<string | null>(null)
	const {userLogin, userPassword} = useTypedSelector(state => state.AuthReducer)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const onClickHandle = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
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
			setError('Данные не верны')
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
						onClick={onClickHandle}>Login
				</Button>
				<div className='login-page__error-message'>{error}</div>
			</form>
	);
};