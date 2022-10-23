import React, {useState} from 'react';
import {GameGenre} from "../../components/game-genre";
import {GameBuy} from "../../components/game-buy";
import {GameCover} from "../../components/game-cover";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import './game-page.css'

export const GamePage: React.FC = () => {
	const {isAdmin} = useTypedSelector(state => state.AuthReducer)
	const {currentGame} = useTypedSelector(state => state.GameItemsReducer)

	const [inputError, setInputError] = useState<string | null>(null)
	const [areaError, setAreaError] = useState<string | null>(null)

	const [inputText, setInputText] = useState(currentGame.title)
	const [inputIsEdit, setInputIsEdit] = useState<boolean>(false)

	const [areaText, setAreaText] = useState(currentGame.description)
	const [areaIsEdit, setAreaIsEdit] = useState<boolean>(false)

	const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const charCount = inputText.length;
		if (inputText.length >= 30) {
			setInputError(`Превышен лимит! ${charCount + '/' + 30} `)
		} else {
			setInputText(e.target.value.trim())
			setInputError(`${charCount + '/' + 30} `)
		}
	}

	const textAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const charCount = areaText.length;
		if (areaText.length >= 600) {
			setAreaError(`Превышен лимит! ${charCount + '/' + 600} `)
		} else {
			setAreaText(e.target.value.trim())
			setAreaError(`${charCount + '/' + 600} `)
		}
	}

	let textarea
	if (areaIsEdit) {
		textarea =
				<>
				<textarea
						required={true}
				value={areaText}
				onChange={textAreaChange}
				onBlur={() => setAreaIsEdit(false)}
				cols={45}
				rows={10}
				onKeyPress={(e) => {
					if(e.key === 'Enter'){
						e.preventDefault()
						setAreaIsEdit(false)
					}
				}}/>
		<span className='textarea'> {areaError}</span>
</>
	} else {
		textarea = <div onDoubleClick={() => isAdmin ? setAreaIsEdit(true) : null}>{areaText}</div>;
	}

let input
	if (inputIsEdit) {
		input =
				<>
					<input
				required={true}
				value={inputText}
				onChange={inputChange}
				onBlur={() => setInputIsEdit(false)}
				size={30}
				onKeyPress={(e) => {
					if(e.key === 'Enter'){
						e.preventDefault()
						setInputIsEdit(false)
					}
				}}
		/>
		<span className='textarea'> {inputError}</span>
		</>
	} else {
		input = <div onDoubleClick={() => isAdmin ? setInputIsEdit(true) : null}>{inputText}</div>;
	}

	if(!currentGame) return  null

	return (
			<div className='game-page'>
					<h1 className="game-page__title">{input}</h1>
				<div className="game-page__content">
					<div className="game-page__left">
						<iframe
								width='90%'
								height='400px'
								src={currentGame.video}
								title='Youtube Video Player'
								frameBorder="0"
						>
						</iframe>
					</div>
					<div className="game-page__right">
						<GameCover image={currentGame.image} game={currentGame}/>
						<p>{textarea}</p>
						<p className='secondary-text'>Популярные метки этой игры: </p>
						{currentGame.genres.map((genre: any) => <GameGenre genre={genre} key={genre}/>)}
						<div className="game-page__buy-game">
							<GameBuy game={currentGame}/>
						</div>
					</div>
				</div>
			</div>
	);
};


