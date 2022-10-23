import React from 'react';
import {GameItem} from '../../components/game-item'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import './home-page.css'

export const HomePage: React.FC = () => {
	const games = useTypedSelector(state => state.shoppingReducer.gameInfo)

	return (
				<div className='home-page'>
				{games.map(game => <GameItem game={game} key={game.id}/>)}
			</div>
	);
};


