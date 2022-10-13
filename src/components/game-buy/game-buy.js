import React from 'react';
import './game-buy.css'
import {useDispatch, useSelector} from "react-redux";
import {addToCart, increaseBucketPrice, removeFromCart} from "../../redux/cart/actions";

export const GameBuy = ({game}) => {
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
				<button
						onClick={handleClick}
						className='btn btn--primary'>
					{isItemInCart ? 'Remove from busket' : 'В корзину'}
				</button>
			</div>
	);
};

