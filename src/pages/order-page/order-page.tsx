import React from 'react';
import {useDispatch} from "react-redux";
import {calcTotal, enumerate} from "../../components/utils/utils";
import OrderItem from "../../components/order-item/order-item";
import {clearCart} from "../../redux/cart/actions";
import {Button} from "../../components/ui/buttons";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import './order-page.css'


export const OrderPage: React.FC = () => {
const dispatch = useDispatch()
	const items = useTypedSelector(state => state.shoppingReducer.busket )
	const handleRemove = () => {
		dispatch(clearCart())
	}
	if(items.length < 1){
		return <h1>Корзина пуста!</h1>
	}

	return (
			<div className='order-page'>
				<div className="order-page__left">
					{items.map(game => <OrderItem key={game.id} game={game}/>)}
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
