import React from "react";
import { Outlet } from "react-router-dom";
import CodexMenu from "./codexMenu";

export default function Codex() {
    const [modalActive, setModalActive] = React.useState("");

    return(
        <section className="section">
            <div className="content has-text-centered">
                <h2>Tourist Information</h2>
                <p>To visitors of Kalmany, we welcome you to our humble nation, and ask that you pick up after your pets, treat our people with respect, and keep an open mind as the Kalmans are very opinionated.</p>
            </div>
            <div className="columns">
                <div className="is-hidden-tablet is-clickable">
                    <a role="button" className="navbar-burger is-pulled-left" onClick={() => setModalActive("is-active")}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className="column is-one-quarter is-hidden-mobile">
                    <CodexMenu />
                </div>
                <div className="column">
                    <Outlet />
                </div>
            </div>
            <div className={"modal " + modalActive} onClick={() => setModalActive("")}>
                <div className="modal-background"></div>
                <div className="modal-content">
                    <div className="box">
                        <CodexMenu/>
                    </div>
                </div>
                <button className="modal-close is-large" onClick={() => setModalActive("")}></button>
            </div>
        </section>
    )
}