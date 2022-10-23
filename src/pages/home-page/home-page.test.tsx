import '@testing-library/jest-dom'
import {render, screen} from "@testing-library/react"
import { Provider } from 'react-redux'
import {store} from "../../redux"
import { BrowserRouter } from 'react-router-dom'
import {Button} from "../../components/ui/buttons";
import React from "react";
import userEvent from "@testing-library/user-event";
import {HomePage} from "./home-page";
import {useTypedSelector} from "../../hooks/useTypedSelector";

jest.mock('react-redux')


describe('home-page', () =>{

	it('should create game items []', () => {
		useTypedSelector.mockReturnValue([])
		const component = render(<HomePage/>)
		expect(component).toMatchSnapshot()
	});


	it('should render component', function () {
		render(<Provider store={store}>
			<BrowserRouter>
				<HomePage />
			</BrowserRouter>
		</Provider>)

		expect(screen.queryByText(/Forza Horizon 5/i)).toBeNull()
	});

	it('should clicked button', () => {
		const hadleChange = jest.fn()
		const {container} = render(
				<Button onClick={hadleChange}></Button>
		)
		const btn = container.firstChild
		userEvent.click(btn)
		expect(hadleChange).toHaveBeenCalledTimes(1)
	});
})
