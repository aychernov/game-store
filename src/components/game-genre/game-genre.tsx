import React from 'react';
import './game-genre.css'

interface IGameGenre{
	genre: string
}

export const GameGenre: React.FC<IGameGenre> = ({genre}) => {
	return (
			<span className='game-genre'>
				{genre}
			</span>
	);
};

