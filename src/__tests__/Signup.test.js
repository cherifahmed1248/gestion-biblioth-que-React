import React from "react"
import { render, fireEvent, act, getByLabelText } from "@testing-library/react"
import Signup from "../components/signup/signuup"
import user from '@testing-library/user-event'
import { Router } from "react-router-dom"
import { createMemoryHistory } from 'history'
describe("test signup", () => {
    test("should works without crashing", async () => {
        const mockLogin = await jest.fn()
        const history = createMemoryHistory({ initialEntries: ["/"] })
        const { debug } = render(
            <Router history={history}>
                <Signup login={mockLogin} />
            </Router>)
        // debug()
    })
})