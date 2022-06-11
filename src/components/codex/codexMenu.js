import { NavLink } from "react-router-dom";
import React from "react";
import axios from "axios";

export default function CodexMenu() {
    const [constituencyList, setConstituencyList] = React.useState([]);

    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_ROOT}/constituency`)
        .then(res => {
            const constituencyListResponse = res.data.data;
            setConstituencyList(constituencyListResponse.sort((a,b) => a.name.localeCompare(b.name)));
        })
        
    },[]);

    return (
        <aside className="menu">
            <p className="menu-label">
                Citizens
            </p>
            <ul className="menu-list">
                <li><NavLink to="/codex/ethnicity" className={({ isActive }) => (isActive ? " is-active" : "")}>Ethnicity</NavLink></li>
                <li><NavLink to="/codex/industry" className={({ isActive }) => (isActive ? " is-active" : "")}>Industry</NavLink></li>
                <li><NavLink to="/codex/religion" className={({ isActive }) => (isActive ? " is-active" : "")}>Religion</NavLink></li>
                <li><NavLink to="/codex/gss" className={({ isActive }) => (isActive ? " is-active" : "")}>Gender, Sex & Sexuality</NavLink></li>
            </ul>
            <p className="menu-label">
                Parliament
            </p>
            <ul className="menu-list">
                <li><NavLink to="/codex/elections" className={({ isActive }) => (isActive ? " is-active" : "")}>Elections</NavLink></li>
                <li><NavLink to="/codex/assemblies" className={({ isActive }) => (isActive ? " is-active" : "")}>Assemblies</NavLink></li>
                <li><NavLink to="/codex/rankings" className={({ isActive }) => (isActive ? " is-active" : "")}>Rankings</NavLink></li>
            </ul>
            <p className="menu-label">
                Constituencies
            </p>
            <ul className="menu-list">
                {
                    constituencyList.map(con =>
                        <li key={"con-" + con.id}><NavLink to={"/codex/constituency/" + con.id} className={({ isActive }) => (isActive ? " is-active" : "")}>{con.name}</NavLink></li>  
                    )
                }
            </ul>
        </aside>
    )
}