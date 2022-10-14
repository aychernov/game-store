import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, increaseBucketPrice, removeFromCart} from "../../redux/cart/actions";
import './game-buy.css'

export const GameBuy = ({game}) => {

	const {userAuth} = useSelector(state => state.AuthReducer)

	const items = useSelector(state => state.shoppingReducer.busket)
	const isItemInCart = items.some(item => item.id === game.id)

	const dispatch = useDispatch()

	const handleClick = e => {
		e.stopPropagation()
		if ( isItemInCart ){
			dispatch(removeFromCart(game))
		} else{
			dispatch(addToCart(game))
			dispatch(increaseBucketPrice(game.price))
		}
	}



	return (
			<div className='game-buy'>
				<span className='game-buy__price'>{game.price} руб.</span>
				{userAuth ? <button
						onClick={handleClick}
						className='btn btn--primary'>
					{isItemInCart ? 'Убрать из корзины' : 'В корзину'}
				</button>
				:  <Link className='login-link' to="/login"> <br/> Авторизуйтесь для покупок! :P</Link>}

			</div>
	);
};

