import React from 'react';
import './cart-item.css'

interface ICartItem{
	title: string,
	price: number,
	id: number
}

export const CartItem: React.FC<ICartItem> = ({title, price, id}) => {
	return (
			<div className='cart-item'>
				<span>{title}</span>
				<div className="cart-item__price">
					<span>{price} руб.</span>
					<span>{id} id</span>
				</div>
			</div>
	);
};

