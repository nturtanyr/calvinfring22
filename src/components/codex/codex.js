import React from "react";
import { Outlet } from "react-router-dom";
import CodexMenu from "./codexMenu";

export default function Codex() {
    const [selected_index, setSelectedIndex] = React.useState(0)

    return(
        <section className="section">
            <div className="content has-text-centered">
                <h2>Tourist Information</h2>
                <p>To visitors of Kalmany, we welcome you to our humble nation, and ask that you pick up after your pets, treat our people with respect, and keep an open mind as the Kalmans are very opinionated.</p>
            </div>
            <div className="columns">
                <div className="column is-one-quarter is-hidden-mobile">
                    <CodexMenu />
                </div>
                <div className="column">
                    <Outlet />
                </div>
            </div>
        </section>
    )
}