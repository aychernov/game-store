import React, {useCallback, useState} from 'react';
import {CartMenu} from '../cart-menu'
import {ItemsInCart} from '../items-in-cart'
import {useSelector} from "react-redux";
import {calcTotal} from "../utils";
import {useNavigate} from "react-router-dom";
import './cart-block.css'

export const CartBlock = () => {
	const [IsCartMenuVisible, setIsCartMenuVisible] = useState(false)
	const navigate = useNavigate()

	const items = useSelector(state => state.shoppingReducer.busket)
	const totalPrice = calcTotal(items)

	const handleClick = useCallback(() => {
		setIsCartMenuVisible(false)
		navigate('/order')
	}, [navigate])

	return (
			<div className='cart-block'>
				<ItemsInCart quantity={items.length}/>
				<div
						className="cart-block__icon"
						onClick={() => setIsCartMenuVisible(!IsCartMenuVisible)}>
				</div>
				{totalPrice > 0 ? <span className='cart-block__total-price'>{totalPrice} руб.</span> : null}
				{IsCartMenuVisible && <CartMenu items={items} onClick={handleClick}/>}
			</div>
	);
};

