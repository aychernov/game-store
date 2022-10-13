import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {calcTotal, enumerate} from "../../components/utils";
import OrderItem from "../../components/order-item/order-item";
import './order-page.css'
import {clearCart} from "../../redux/cart/actions";
import {Button} from "../../components/ui/buttons";

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
						<span> {items.length} { enumerate(items.length, ['товар', 'товара', 'товаров'])} на сумму {calcTotal(items)} руб. </span>
					</div>
				</div>
				<Button
						onClick={handleRemove}
						className={'btn btn--secondary'}>
					Clear Cart
				</Button>
			</div>
	);
};
