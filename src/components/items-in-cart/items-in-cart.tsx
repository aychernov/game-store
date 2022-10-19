import React from "react";
import './items-in-cart.css'

interface IItemsInCart {
	quantity: number
}

export const ItemsInCart: React.FC<IItemsInCart> = ({quantity = 0}) => {
	return quantity > 0 ? (
			<div className='items-in-cart'>
				{quantity}
			</div>)
			: null
}

