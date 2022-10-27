import React from "react"
import { App } from "./App"
import { createMemoryHistory } from 'history'
import { render } from "@testing-library/react"
import { Router } from "react-router-dom"
import { Header } from "./Header"


jest.mock("./Home", () => ({ Home: () => <div>Home</div>}))
jest.mock("./Cart", () => ({ Cart: () => <div>Cart</div>}))
jest.mock("./Checkout", () => ({ Checkout: () => <div>Checkout</div>}))
jest.mock("./OrderSummary", () => ({ OrderSummary: () => <div>Order Summary</div>}))
jest.mock("./CartWidget", () => ({
	CartWidget: () => <div>Cart Widget</div>
}))

describe("Header", () => {
	it("renders correctly", () => {
		const { container } = renderWithRouter(() => <Header />)
		expect(container.innerHTML).toMatch('Goblin Store')
		expect(container.innerHTML).toMatch('Cart widget')
	})
})

describe("App", () => {
  it("renders successfully", () => {
    const history = createMemoryHistory()
    const { container } = render(
      <Router history={history}>
        <App />
      </Router>
    )
    expect(container.innerHTML).toMatch('Goblin Store')
  })
  
  it("renders Home component on root route", () => {
	  const history = createMemoryHistory();
	  history.push('/')
	  const { container } = render(
		<Router history={history}>
			<App />
		</Router>
	  );
	  expect(container.innerHTML).toMatch("Home")
  })
})


describe('routing', () => {
	it("renders home page on '/'", () => {
		const { container } = renderWithRouter(() => <App />, "/")
		expect(container.innerHTML).toMatch("Home")
	})
	
	it("renders checkout page on '/cart'", () => {
		const { container } = renderWithRouter(
			() => <App />,
			"/cart"
		);
		expect(container.innerHTML).toMatch("Cart")
	})
	
	
	
})














