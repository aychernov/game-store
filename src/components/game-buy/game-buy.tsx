import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {addToCart, increaseBucketPrice, removeFromCart} from "../../redux/cart/actions";
import {Button} from "../ui/buttons";
import './game-buy.css'
import {IGameInfo} from "../../redux/cart/interfaces";

interface IGameBuy{
	game: IGameInfo,
}

export const GameBuy: React.FC<IGameBuy> = ({game}) => {

	const {userAuth} = useTypedSelector(state => state.AuthReducer)
	const items = useTypedSelector(state => state.shoppingReducer.busket)
	const isItemInCart = items.some(item => item.id === game.id)

	const dispatch = useDispatch()

	const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.stopPropagation()
		if ( isItemInCart ){
			dispatch(removeFromCart(game))
		} else {
			dispatch(addToCart(game))
			dispatch(increaseBucketPrice(game.price))
		}}
	return (
			<div className='game-buy'>
				<span className='game-buy__price'>{game.price} руб.</span>
				{userAuth ? <Button
						onClick={handleClick}
						className='btn btn--primary'>
					{isItemInCart ? 'Убрать из корзины' : 'В корзину'}
				</Button>
				:  <Link className='login-link' to="/login"> <br/> Авторизуйтесь для покупок! :P</Link>}

			</div>
	);
};

