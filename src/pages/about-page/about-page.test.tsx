import '@testing-library/jest-dom'
import {render, screen} from "@testing-library/react"
import { Provider } from 'react-redux'
import {store} from "../../redux"
import { BrowserRouter } from 'react-router-dom'
import {Button} from "../../components/ui/buttons";
import React from "react";
import userEvent from "@testing-library/user-event";
import {AboutPage} from "./about-page";


describe('about-page', () =>{
	it('should render component', function () {
		render(<Provider store={store}>
			<BrowserRouter>
				<AboutPage />
			</BrowserRouter>
		</Provider>)

		expect(screen.getByText(/Just remember!/i)).toBeInTheDocument()
		expect(screen.queryByText(/Ура/i)).toBeNull()
		expect(screen.getByRole('button')).toBeInTheDocument()
	});


	it('should clicked button', () => {
		const goBack = jest.fn()
		const {container} = render(
				<Button
						className={'btn btn--primary btn--medium'}
						onClick={goBack} >Go back and teach!
				</Button>
		)
		const btn = container.firstChild
		userEvent.click(btn)
		expect(goBack).toHaveBeenCalledTimes(1)
	});
})
