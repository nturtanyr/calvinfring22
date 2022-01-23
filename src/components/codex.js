import React from "react";
import CodexInformation from "./codexinformation";

export default function Codex() {
    const [selected_index, setSelectedIndex] = React.useState(0)

    return(
        <section className="section">
            <div className="content has-text-centered">
                <h2>Tourist Information</h2>
                <p>To visitors of Kalmany, we welcome you to our humble nation, and ask that you pick up after your pets, treat our people with respect, and keep an open mind as the Kalmans are very opinionated.</p>
            </div>
            <div className="columns">
                <div className="column is-one-quarter">
                    <aside className="menu">
                        <p className="menu-label">
                            Citizens
                        </p>
                        <ul className="menu-list">
                            <li><a onClick={() => setSelectedIndex(1)}>Ethnicity</a></li>
                            <li><a onClick={() => setSelectedIndex(2)}>Industry</a></li>
                            <li><a onClick={() => setSelectedIndex(3)}>Religion</a></li>
                            <li><a onClick={() => setSelectedIndex(4)}>Sex & Sexuality</a></li>
                        </ul>
                        <p className="menu-label">
                            Parliament
                        </p>
                        <ul className="menu-list">
                            <li><a onClick={() => setSelectedIndex(5)}>Elections</a></li>
                            <li><a onClick={() => setSelectedIndex(6)}>Assemblies</a></li>
                            <li><a onClick={() => setSelectedIndex(7)}>Rankings</a></li>
                        </ul>
                        <p className="menu-label">
                            Culture
                        </p>
                        <ul className="menu-list">
                            <li><a onClick={() => setSelectedIndex(8)}>Socks</a></li>
                            <li><a onClick={() => setSelectedIndex(9)}>Bears</a></li>
                            <li><a onClick={() => setSelectedIndex(10)}></a></li>
                        </ul>
                    </aside>
                </div>
                <div className="column">
                    <CodexInformation identifier={selected_index}/>
                </div>
            </div>
        </section>
    )
}