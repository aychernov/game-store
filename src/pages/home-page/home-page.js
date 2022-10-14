import React from 'react';
import './home-page.css'
import {GameItem} from '../../components/game-item'
import {useSelector} from 'react-redux'

// Move state GAMES in => Redux store(state)
// const GAMES = []



export const HomePage = () => {
	const games = useSelector(state => state.shoppingReducer.gameInfo)

	return (
				<div className='home-page'>
				{games.map(game => <GameItem game={game} key={game.id}/>)}
			</div>
	);
};


