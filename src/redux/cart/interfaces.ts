export interface IInitialState{
	gameInfo: IGameInfo[],
	busket: IGameInfo[],
	priceBusket: number,
}

export interface IGameInfo{
	image: string,
	title: string,
	genres: string[],
	price: number,
	video: string,
	id: number,
	description: string,
	quantity: number
}
