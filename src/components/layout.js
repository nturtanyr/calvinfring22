import React from "react"
import HeaderBar from "./headerbar"
import FooterBar from "./footbar"
import MidSection from "./midsection"
import { Outlet } from "react-router-dom"

function Layout() {
    return (
        <div>
            <HeaderBar/>
            <MidSection>
              <Outlet/>
            </MidSection>
            <FooterBar />
        </div>
    )
}
export default Layout;