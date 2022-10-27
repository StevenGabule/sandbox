import React from 'react'
//import { Header } from "./Header"

jest.mock("./Home", () => ({ Home: () => <div>Home</div>}))

describe("Header", () => {
  it.todo("renders correctly")
  
  it("navigates to / on header title click", () => {
	  const { getByText, history } = renderWithRouter(() => <Header />)
	  fireEvent.click(getByText("Goblin Store"))
	  expect(history.location.pathname).toEqual('/')
  })
})