import React from "react";
import axios from 'axios';
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";


export default function ConstituencyNav({title, subtitle}) {
    const [constituencyList, setConstituencyList] = React.useState([]);
    const navigate = useNavigate();
    const params = useParams();

    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_ROOT}/constituency`)
        .then(res => {
            const constituencyList = res.data.data;
            setConstituencyList(constituencyList);
        })
        
    },[]);

    return(
        <section className="section">
            <div className="content has-text-centered">
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
            <div className="columns">
                <div className="column is-one-quarter is-hidden-mobile">
                    <aside className="menu">
                        <p className="menu-label">
                            Constituencies
                        </p>
                        <ul className="menu-list">
                        {
                            constituencyList.map(con =>
                                <li key={`link-${con.id}`}>
                                    <NavLink 
                                    to={`${con.id}`}
                                    className={({ isActive }) => isActive ? 'is-active' : undefined}>
                                        {con.name}
                                    </NavLink>
                                </li>
                            )
                        }
                        </ul>
                    </aside>
                </div>
                <div className="column is-half is-hidden-tablet">
                
                    <label className="label">
                        Constituency:
                    </label>
                    <div className="select">
                        <select value={params.constituency_id} onChange={(event) => navigate( event.target.value)}>
                        {
                            constituencyList.map(con =>
                                <option key={`option-${con.id}`} value={con.id} >{con.name}</option>
                            )
                        }
                        </select>
                    </div>
                    <hr/>
                </div>
                <div className="column">
                    <Outlet/>
                </div>
            </div>
        </section>
    )
}