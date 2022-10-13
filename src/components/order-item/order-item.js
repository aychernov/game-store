import React from 'react';
import {useDispatch} from "react-redux";
import {GameCover} from "../game-cover";
import {removeFromCart} from "../../redux/cart/actions";
import './order-item.css'

const OrderItem = ({game}) => {

	const dispatch = useDispatch()
const handleClick = () =>{
		dispatch(removeFromCart(game))
}

	return (
			<div className='order-item'>
				<div className="order-item__cover">
					<GameCover image={game.image}/>
				</div>
				<div className="order-item__title">
					<span>{game.title}</span>
				</div>
				<div className="order-item__price">
					<span>{game.price} руб.</span>
					<div
							className="remove-icon cart-item__delete-icon"
							onClick={handleClick}>
					</div>
				</div>
			</div>
	);
};

export default OrderItem;
