import React from 'react';
import './cart-block.css'
import {useSelector} from "react-redux";

export const CartBlock = () => {
	const priceBucket = useSelector(state => state.priceBusket)
	const counterBucket = useSelector(state => state.busket.length)

	return (
			<div className='cart-block'>
				<span>Count: {counterBucket}</span>
				<div className="cart-block__icon"></div>
				<span className='cart-block__total-price'>{priceBucket} руб.</span>
			</div>
	);
};

