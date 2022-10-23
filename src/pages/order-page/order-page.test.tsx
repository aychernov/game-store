import '@testing-library/jest-dom'
import { render, screen} from "@testing-library/react"
import { Provider } from 'react-redux'
import {store} from "../../redux"
import { BrowserRouter } from 'react-router-dom'
import {Button} from "../../components/ui/buttons";
import React from "react";
import userEvent from "@testing-library/user-event";
import {OrderPage} from "./order-page";


describe('login-page', () =>{
	it('should render component', function () {
		render(<Provider store={store}>
			<BrowserRouter>
				<OrderPage />
			</BrowserRouter>
		</Provider>)

		expect(screen.queryByText(/У вас в корзине/)).toBeNull()
		expect(screen.queryByText(/Ура/i)).toBeNull()
	});

	it('should clicked button', () => {
		const hadleChange = jest.fn()
		const {container} = render(
				<Button
						className='btn btn--primary'
						onClick={hadleChange}>Очистить корзину
				</Button>
		)
		const btn = container.firstChild
		userEvent.click(btn)
		expect(hadleChange).toHaveBeenCalledTimes(1)
	});
})
