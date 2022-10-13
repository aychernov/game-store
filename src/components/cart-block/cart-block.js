import React, {useState} from 'react';
import './cart-block.css'
import {CartMenu} from '../cart-menu'
import {ItemsInCart} from '../items-in-cart'
import {useSelector} from "react-redux";
import {calcTotal} from "../utils";

export const CartBlock = () => {
	const [IsCartMenuVisible, setIsCartMenuVisible] = useState(false)
	const items = useSelector(state => state.busket)
	// const priceBucket = useSelector(state => state.priceBusket)
	const counterBucket = useSelector(state => state.busket.length)
	const totalPrice = calcTotal(items)
	console.log(items)
	return (
			<div className='cart-block'>
				<ItemsInCart quantity={items.length}/>
				{/*<span>Count: {counterBucket}</span>*/}
				<div
						className="cart-block__icon"
						onClick={() => setIsCartMenuVisible(!IsCartMenuVisible)}>
				</div>
				{totalPrice > 0 ? <span className='cart-block__total-price'>{totalPrice} руб.</span> : null}
				{IsCartMenuVisible && <CartMenu items={items} onClick={() => null}/>}
			</div>
	);
};

