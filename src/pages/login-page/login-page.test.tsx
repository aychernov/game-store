import '@testing-library/jest-dom'
import {fireEvent, render, screen} from "@testing-library/react"
import {LoginPage} from "./login-page"
import { Provider } from 'react-redux'
import {store} from "../../redux"
import { BrowserRouter } from 'react-router-dom'
import {Button} from "../../components/ui/buttons";
import React from "react";
import userEvent from "@testing-library/user-event";


describe('login-page', () =>{
	it('should render component', function () {
		render(<Provider store={store}>
			<BrowserRouter>
				<LoginPage />
			</BrowserRouter>
		</Provider>)

		expect(screen.getByText(/Введите логин/i)).toBeInTheDocument()
		expect(screen.queryByText(/Ура/i)).toBeNull()
		expect(screen.getByRole('textbox')).toBeInTheDocument()
	});

	it('should render async user', async () => {
		render(<Provider store={store}>
			<BrowserRouter>
				<LoginPage />
			</BrowserRouter>
		</Provider>)

		expect(screen.queryByText(/Добро пожаловать/i)).toBeNull()
		expect(await screen.findByText(/Добро пожаловать/i)).toBeInTheDocument()
	});

	it('should handle change value', async () => {
		render(<Provider store={store}>
			<BrowserRouter>
				<LoginPage />
			</BrowserRouter>
		</Provider>)
		expect(screen.queryByText(/User/i)).toBeNull()
		await screen.findByText(/User/i)
		// fireEvent.change(screen.getByRole('textbox'), {
		// 	target: {value: 'User'}
		// })
		userEvent.type(screen.getByRole('textbox'), 'User')
		expect(screen.queryByText(/User/i)).toBeInTheDocument()
	});

	it('should clicked button', () => {
		const hadleChange = jest.fn()
		const {container} = render(
				<Button
						className='btn btn--login'
						onClick={hadleChange}>Login
				</Button>
		)
		const btn = container.firstChild
		userEvent.click(btn)
		expect(hadleChange).toHaveBeenCalledTimes(1)
	});
})
