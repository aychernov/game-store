import React from 'react';
import {calcTotal} from "../utils/utils";
import {CartItem} from '../cart-item'
import {clearCart} from "../../redux/cart/actions";
import {Button} from "../ui/buttons";
import {useDispatch} from "react-redux";
import './cart-menu.css'
import {IGameInfo} from "../../redux/cart/interfaces";

interface ICartMenu{
	items: IGameInfo[],
	onClick: React.MouseEventHandler
}


export const CartMenu: React.FC<ICartMenu> = ({items, onClick}) => {

	const dispatch = useDispatch()
	const handleRemove = () => {
		dispatch(clearCart())
	}

	return (
			<div className='cart-menu'>
				<div className="cart-menu__games-list">
					{
						items.length > 0 ? items.map(game => <CartItem key={game.id} price={game.price} title={game.title}
																													 id={game.id}/>) : 'Корзина пуста!'
					}
				</div>
				{items.length > 0 ?
							<div className='cart-menu__arrange'>
								<div className="cart-menu__total-price">
									<span>Итого:</span>
									<span>{calcTotal(items)} руб.</span>
								</div>
								<Button
										className='btn btn--primary'
										onClick={onClick}> Оформить заказ
								</Button>
								<Button
										className='btn btn--primary'
										onClick={handleRemove}> Очистить корзину
								</Button>
							</div>
							: null }
			</div>
	);
};


