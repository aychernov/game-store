import React from 'react';
import './button.css'

export const Button = ({
		onClick,
		children,
											 }) => {
	return (
			<button className='btn btn--primary' onClick={onClick}>
				{children}
			</button>
	);
};

