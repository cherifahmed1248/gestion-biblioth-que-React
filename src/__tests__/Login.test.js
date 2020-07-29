import React from "react"
import { render, fireEvent, act, getByLabelText } from "@testing-library/react"
import Login from "../components/login/login"
import user from '@testing-library/user-event'
import { Router } from "react-router-dom"
import { createMemoryHistory } from 'history'
describe("test login", () => {
    test("should works without crashing", () => {
        const mockLogin = jest.fn()
        const history = createMemoryHistory({ initialEntries: ["/"] })
        const { debug } = render(
            <Router history={history}>
                <Login logintest={mockLogin} />
            </Router>)
        // debug()
    })

    test("test the integration of failed Login and App ", async () => {
        const mockLogin = jest.fn()
        const history = createMemoryHistory({ initialEntries: ["/"] })
        const { getByTestId } = render(
            <Router history={history}>
                <Login logintest={mockLogin} />
            </Router>)
        const Loginbtn = getByTestId("submit")
        expect(Loginbtn).toBeTruthy()
        user.click(Loginbtn)
        expect(mockLogin).toHaveBeenCalled()
        expect(mockLogin).toHaveBeenCalledTimes(1)
    })
    test("test the integration of successful Login and App ", async () => {
        const mockLogin = await jest.fn()
        const history = createMemoryHistory({ initialEntries: ["/"] })
        const { getByTestId, getByLabelText } = render(
            <Router history={history}>
                <Login logintest={mockLogin} />
            </Router>)
        const EmailValue = "John4@test.com"
        const InputEmail = getByLabelText(/Email/i)
        user.type(InputEmail, EmailValue)
        const PwdValue = "1234"
        const InputPwd = getByLabelText(/Password/i)
        user.type(InputPwd, PwdValue)
        const Loginbtn = getByTestId("submit")
        expect(Loginbtn).toBeTruthy()
        user.click(Loginbtn)
        expect(mockLogin).toHaveBeenCalled()
        expect(mockLogin).toHaveBeenCalledTimes(1)
    })
})