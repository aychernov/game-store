import React from 'react';
import {calcTotal} from "../utils";
import {CartItem} from '../cart-item'
import './cart-menu.css'
import {useDispatch} from "react-redux";
import {clearCart} from "../../redux/cart/actions";
import {Button} from "../ui/buttons";

export const CartMenu = ({items, onClick}) => {

	const dispatch = useDispatch()

	const handleRemove = () => {
dispatch(clearCart())
	}

	return (
			<div className='cart-menu'>
				<div className="cart-menu__games-list">
					{
						items.length > 0 ? items.map(game => <CartItem key={game.id} price={game.price} title={game.title} id={game.id} />) : 'Busket is empty!'
					}
				</div>
				{
					items.length > 0 ?
							<div className='cart-menu__arrange'>
								<div className="cart-menu__total-price">
									<span>Итого:</span>
									<span>{calcTotal(items)} руб.</span>
								</div>
								<Button
										className='btn btn--primary'
										onClick={onClick}
								>
									Оформить заказ
								</Button>
								<Button
										className='btn btn--primary'
										onClick={handleRemove}
								>
									Очистить корзину
								</Button>
							</div>
							: null
				}
			</div>
	);
};


