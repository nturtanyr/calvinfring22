import React from "react"
import HeaderBar from "./headerbar"
import FooterBar from "./footbar"
import MidSection from "./midsection"
import { Outlet } from "react-router-dom"

function Layout(props) {
    return (
        <div>
            <HeaderBar color={props.color}/>
            <MidSection>
              <Outlet/>
            </MidSection>
            <FooterBar />
        </div>
    )
}
export default Layout;