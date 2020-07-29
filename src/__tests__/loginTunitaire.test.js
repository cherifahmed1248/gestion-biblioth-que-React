import React from "react"
import { render, fireEvent, act } from "@testing-library/react"
import Login from "../components/login/login";

import user from '@testing-library/user-event'
jest.mock('react-router-dom', () => ({
    useHistory: () => ({
        push: jest.fn(),
    }),

}));
describe("test Login", () => {


    test("should works without crashing", () => {
        const mocklogin = jest.fn()

        const { debug } = render(<Login logintest={mocklogin} />)
        //debug()
    })


    test("should contains Email, password and a button", () => {
        const mocklogin = jest.fn()

        const { debug, getByLabelText, getByTestId, getByText } = render(
            <Login logintest={mocklogin} />
        )
        const inputEmail = getByLabelText(/Email/i)
        expect(inputEmail).toBeTruthy()
        expect(inputEmail).toHaveAttribute("type", "text")

        const inputPassword = getByLabelText(/Password/i)
        expect(inputPassword).toBeTruthy()
        expect(inputPassword).toHaveAttribute("type", "password")

        expect(getByTestId("submit")).toBeTruthy()
        expect(getByText(/Connexion/i)).toBeTruthy()

    })

    test("se connect succes", async () => {
        const promise = Promise.resolve()
        const mocklogin = jest.fn()

        const { debug, getByLabelText, getByTestId } = render(
            <Login logintest={mocklogin} />
        )
        const input = getByLabelText(/Email/i)

        const emailValue = "amir@test.com"
        user.type(input, emailValue)
        //fireEvent.change(input, { target: { value: emailValue } })

        // debug(input)


        expect(input).toHaveValue(emailValue)

        const inputPassword = getByLabelText(/Password/i)
        const PasswordValue = "1234"

        user.type(inputPassword, PasswordValue)
        //fireEvent.change(inputPassword, { target: { value: PasswordValue } })

        //debug(inputPassword)

        expect(inputPassword.value).toContain(PasswordValue)

        const submitButton = getByTestId("submit")
        //debug(submitButton)

        //fireEvent.click(submitButton)
        user.click(submitButton)
        //await act(() => { promise })
        //debug()
        expect(mocklogin).toHaveBeenCalled()
        expect(mocklogin).toHaveBeenCalledTimes(1)



    })


})