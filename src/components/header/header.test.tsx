import '@testing-library/jest-dom'
import {render, screen} from "@testing-library/react";
import {Header} from "./header";
import {Provider} from "react-redux";
import {store} from "../../redux";
import {BrowserRouter} from "react-router-dom";
import React from "react";

describe('header component', () => {
	it('should render', () => {
		render(<Provider store={store}>
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		</Provider>)

		expect(screen.getByText('Game Store')).toBeInTheDocument()
	});

	it('should work without data', () => {
		render(<Provider store={store}>
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		</Provider>)

		expect(screen.queryByRole('textbox')).toBeNull()
	});


})
