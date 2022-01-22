import React from "react"
import axios from 'axios';
import { NavLink, Link } from "react-router-dom"
import TickerTape from "./tickertape"
import styles from "./headerbar.module.css"
import kec_logo from '../images/keclogo.png';

function HeaderBar(props) {
    
    const [LoginShow, setLoginShow] = React.useState(false);
    const [conList, setConstituencies] = React.useState([]);
    const [modalState, setModalState] = React.useState(null);

    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_ROOT}/constituency`)
        .then(res => {
            const constituencies = res.data.data;
            setConstituencies(constituencies);
        })
        
    },[]);
    
    React.useEffect(() => {
        if(LoginShow){
            setModalState("is-active");
        }
        else{
            setModalState(null);
        }
        
    },[LoginShow]);

    var colorClass
    if(props.color == "red")
    {
        colorClass = "is-info"
    }
    else
    {
        colorClass = "is-primary"
    }
    return (
        <section className={`${colorClass} ${styles.kheader}`}>
            <section className={`hero is-small ${colorClass} ${styles.kbar}`}>
                <div className="hero-body">
                    <img alt="kec_logo" className={`image is-96x96 ${styles.klogo}`} src={kec_logo}/>
                    <h1 className={`title has-text-white is-hidden-mobile ${styles.ktitletext}`}>The Kalmany Electoral Commission</h1>
                    <h1 className={`title has-text-white is-hidden-tablet ${styles.ktitletext}`}>KEC</h1>   
                </div>
                <nav className={`navbar ${colorClass} ${styles.knavbar}`} role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarKalmany">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div id="navbarKalmany" className="navbar-menu">
                        <div className="navbar-end">
                            <NavLink to="/" className="navbar-item">
                                Home
                            </NavLink>
                            <NavLink to="/news" className="navbar-item">
                                News
                            </NavLink>
                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link">
                                    Constituencies
                                </a>
                                <div className="navbar-dropdown has-text-black">
                                    {
                                        conList.map(con =>
                                            <Link key={`con${con.id}`} to={`/constituency/${con.id}`} className="navbar-item"  onClick={(event) => { event.target.blur(); }}>
                                                {con.name}
                                            </Link>
                                        )
                                    }
                                </div>
                            </div>
                            <NavLink to="/assembly/latest" className="navbar-item">
                                Parliament
                            </NavLink>
                            <NavLink to="/rankings" className="navbar-item">
                                Rankings
                            </NavLink>
                            <div className="navbar-item">
                                <div className="buttons">
                                    <div className={`button ${colorClass}`} onClick={() => setLoginShow(true)}>
                                        <strong>Log in</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>
            <TickerTape/>
            <div id="modal-login" className={`modal ${modalState}`}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                    <p className="modal-card-title">Login</p>
                    <button className="delete" aria-label="close" onClick={() => setLoginShow(false)}></button>
                    </header>
                    <section className="modal-card-body">
                        <div className="field">
                            <label className="label">Citizen Name</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Name"/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Citizen Email</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input" type="email" placeholder="Email"/>
                                <span className="icon is-small is-left">
                                    <i className="fas fa-envelope"></i>
                                </span>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Citizen Password</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input is-danger" type="password" placeholder="********"/>
                            </div>
                        </div>
                        <p>
                            <strong>If you are a citizen of Kalmany and haven't registered to vote, please register <a>here</a>.</strong></p>
                    </section>
                    <footer className="modal-card-foot">
                    <button className="button is-primary">Login</button>
                    <button className="button" onClick={() => setLoginShow(false)}>Cancel</button>
                    </footer>
                </div>
            </div>
        </section>
        
    )
}

export default HeaderBar;