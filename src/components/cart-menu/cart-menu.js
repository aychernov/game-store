import React from 'react';
import {calcTotal} from "../utils";
import {CartItem} from '../cart-item'
import './cart-menu.css'

export const CartMenu = ({items, onClick}) => {
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
								<button
										className='btn-order'
										onClick={onClick}
								>
									Get Order
								</button>
							</div>
							: null
				}
			</div>
	);
};


