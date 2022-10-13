import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {calcTotal, enumerate} from "../../components/utils";
import OrderItem from "../../components/order-item/order-item";
import {clearCart} from "../../redux/cart/actions";
import {Button} from "../../components/ui/buttons";
import './order-page.css'

export const OrderPage = () => {
const dispatch = useDispatch()
	const items = useSelector(state => state.shoppingReducer.busket)
	const handleRemove = () => {
		dispatch(clearCart())
	}
	if(items.length < 1){
		return <h1>Корзина пуста!</h1>
	}

	return (
			<div className='order-page'>
				<div className="order-page__left">
					{items.map(game => <OrderItem game={game}/>)}
				</div>
				<div className="order-page__right">
					<div className="order-page__total-price">
						<span>У вас в корзине {items.length} { enumerate(items.length, ['товар', 'товара', 'товаров'])} на сумму {calcTotal(items)} руб. </span>
					</div>
					<Button
							onClick={handleRemove}
							className={'btn btn--primary'}>
						Очистить корзину
					</Button>
				</div>
			</div>
	);
};
