import React from 'react';
import './button.css'

interface IButton{
	onClick?: React.MouseEventHandler<HTMLElement>,
	children: React.ReactNode,
	className: string,
}


export const Button: React.FC<IButton> = ({onClick, children, className}) => {
	return (
			<button className={className} onClick={onClick}>
				{children}
			</button>
	);
};

