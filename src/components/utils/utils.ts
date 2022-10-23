
// Подсчет общей стоимости
import {IGameInfo} from "../../redux/cart/interfaces";

export const calcTotal = (items: IGameInfo[]) => items.reduce((acc: number, game: IGameInfo) => acc += game.price, 0)


// Склонения
export const enumerate = (num: number, dec: string[]) => {
	if (num > 100) num = num % 100;
	if (num <= 20 && num >= 10) return dec[2];
	if (num > 20) num = num % 10;
	return num === 1 ? dec[0] : num > 1 && num < 5 ? dec[1] : dec[2];
}
