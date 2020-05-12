import React from "react"
import AppMenu from "./appMenu/appMenu"

function AppLayout({ logout, children }) {
    return (
        <>
            <AppMenu logout={logout}>
                {children}
            </AppMenu>
        </>
    )
}
export default AppLayout