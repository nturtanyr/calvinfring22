import React from "react"
import axios from 'axios';
import { NavLink, Link } from "react-router-dom"
import TickerTape from "./tickertape"
import styles from "./headerbar.module.css"
import kec_logo from '../images/keclogo.png';

class HeaderBar extends React.Component {
    
    state = {
        constituencies: []
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_ROOT}/constituency`)
        .then(res => {
            const constituencies = res.data.data;
            this.setState({ constituencies });
        })
    }

    render() {
        return (
            <section className={`is-primary ${styles.kheader}`}>
                <section className={`hero is-small is-primary ${styles.kbar}`}>
                    <div className="hero-body">
                        <img alt="kec_logo" className={`image is-96x96 ${styles.klogo}`} src={kec_logo}/>
                        <h1 className={`title has-text-white is-hidden-mobile ${styles.ktitletext}`}>The Kalmany Electoral Commission</h1>
                        <h1 className={`title has-text-white is-hidden-tablet ${styles.ktitletext}`}>KEC</h1>   
                    </div>
                    <nav className={`navbar is-primary ${styles.knavbar}`} role="navigation" aria-label="main navigation">
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
                                <div className="navbar-item has-dropdown is-hoverable">
                                    <a className="navbar-link">
                                        Constituencies
                                    </a>
                                    <div className="navbar-dropdown has-text-black">
                                        {
                                            this.state.constituencies.map(con =>
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
                                        <NavLink to="/"  className="button is-primary">
                                            <strong>Log in</strong>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </section>
                <TickerTape/>
            </section>
        )
    }
}

export default HeaderBar;