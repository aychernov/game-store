import React from 'react';
import './game-buy.css'
import {useDispatch} from "react-redux";
import {addToCart, increaseBucketPrice, removeFromCart} from "../../redux/cart/actions";

export const GameBuy = ({game}) => {
	const dispatch = useDispatch()

	const handleClick = e => {
		e.stopPropagation()
		dispatch(addToCart(game))
		dispatch(increaseBucketPrice(game.price))
	}

	const hadnleRemove = e => {
		e.stopPropagation()
		dispatch(removeFromCart(game))
	}


	return (
			<div className='game-buy'>
				<span className='game-buy__price'>{game.price} руб.</span>
				<button
						onClick={handleClick}
						className='btn btn--primary'>
					В корзину
				</button>
				<button onClick={hadnleRemove}>
					Удалить из корзины
				</button>
			</div>
	);
};

