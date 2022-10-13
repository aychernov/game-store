import React from 'react';
import './button.css'

export const Button = ({
		onClick,
		children,
		className
											 }) => {
	return (
			<button className={className} onClick={onClick}>
				{children}
			</button>
	);
};

