import '@testing-library/jest-dom'
import {render, screen} from "@testing-library/react";
import {App} from "./App";

describe('home-page component', () => {
	it('should render', () => {
		render(<App/>)

		expect(screen.getByText('Game Store')).toBeInTheDocument()
	});

	it('should work without data', () => {
		render(<App/>)

		expect(screen.queryByRole('props')).toBeNull()
	});

	it('should empty snapshot',  () => {
		const list = render(<App/>)
		expect(list).toMatchSnapshot()
	});

})
