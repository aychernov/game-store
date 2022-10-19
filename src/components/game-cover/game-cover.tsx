import React from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {setCurrentGame} from "../../redux/games/actions";
import {IGameInfo} from "../../redux/cart/interfaces";
import './game-cover.css'

interface IGameCover{
	game: IGameInfo,
	image: string
}

export const GameCover: React.FC<IGameCover> = ({image = "", game}) => {
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

