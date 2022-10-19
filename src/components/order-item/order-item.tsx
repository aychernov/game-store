import React from 'react';
import {useDispatch} from "react-redux";
import {GameCover} from "../game-cover";
import {removeFromCart} from "../../redux/cart/actions";
import {IGameInfo} from "../../redux/cart/interfaces";
import './order-item.css'


interface IOrderItem {
	game: IGameInfo
}

const OrderItem: React.FC<IOrderItem> = ({game}) => {

	const dispatch = useDispatch()
	const handleClick = () => {
		dispatch(removeFromCart(game))
	}

	return (
			<div className='order-item'>
				<div className="order-item__cover">
					<GameCover image={game.image} game={game}/>
				</div>
				<div className="order-item__title">
					<span>{game.title}</span>
				</div>
				<div className="order-item__price">
					<span>{game.price} руб.</span>
					<span>{game.quantity} Кол-во товара</span>
					<div
							className="remove-icon cart-item__delete-icon"
							onClick={handleClick}>
					</div>
				</div>
			</div>
	);
};

export default OrderItem;
