import React from "react";
import '@testing-library/jest-dom'
import {render, screen} from "@testing-library/react"
import { Provider } from 'react-redux'
import {store} from "../../redux"
import { BrowserRouter } from 'react-router-dom'
import {NotFoundPage} from "./not-found-page";


describe('not-found-page', () =>{
	it('should render component', function () {
		render(<Provider store={store}>
			<BrowserRouter>
				<NotFoundPage />
			</BrowserRouter>
		</Provider>)

		expect(screen.getByText(/Oops/i)).toBeInTheDocument()
		expect(screen.queryByText(/Ура/i)).toBeNull()
		expect(screen.queryByRole('button')).toBeNull()
	});
})
