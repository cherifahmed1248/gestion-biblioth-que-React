import React from "react"
import { render } from "@testing-library/react"
import user from "@testing-library/user-event"
import AdherentsRouter from "../components/Adherents/adherentsRouter"
import { createMemoryHistory } from 'history'
import { Router } from "react-router-dom"
import { act } from "react-dom/test-utils"

describe("test routes adherentsRrouter", () => {
    test("should works without crashing", async () => {
        const mockLogout = jest.fn()
        const history = createMemoryHistory({ initialEntries: ["/"] })
        const { debug } = render(
            <Router history={history}>
                <AdherentsRouter logout={mockLogout} />
            </Router>)

    })
})