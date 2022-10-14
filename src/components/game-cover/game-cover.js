import React from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCurrentGame} from "../../redux/games/actions";
import './game-cover.css'

export const GameCover = ({image = "", game}) => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const handleClick = () => {
		dispatch(setCurrentGame(game))
		navigate(`/game/${game.title}`)
	}

	return (
			<div
					onClick={handleClick}
					className='game-cover' style={{backgroundImage: `url(${image})`}}>

			</div>
	);
};

