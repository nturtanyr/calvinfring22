import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import TickerTape from "./tickertape"
import styles from "./headerbar.module.css"
import kec_logo from '../../images/keclogo.png';
import {userDetails} from "../auth/authutils";

function HeaderBar(props) {
    var loggedIn = React.useContext(userDetails).loggedIn
    var colorClass
    if(props.color == "red")
    {
        colorClass = "is-info"
    }
    else if(props.color == "cyan")
    {
        colorClass = "is-warning"
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
                            <NavLink to="/candidate" className="navbar-item">
                                Candidates
                            </NavLink>
                            <NavLink to="/demographies" className="navbar-item">
                                Demographies
                            </NavLink>
                            <NavLink to="/election/latest" className="navbar-item">
                                Election
                            </NavLink>
                            <NavLink to="/assembly/latest" className="navbar-item">
                                Parliament
                            </NavLink>
                            <NavLink to="/rankings" className="navbar-item">
                                Rankings
                            </NavLink>
                            <NavLink to="/codex" className="navbar-item">
                                Information
                            </NavLink>
                            <div className="navbar-item">
                                <div className="buttons">
                                    {loggedIn && (
                                        <NavLink to="/user" className="button is-white">
                                            <strong>Your Account</strong>
                                        </NavLink>
                                    )}
                                    {!loggedIn && (
                                        <NavLink to="/login" className="button is-primary-invert">
                                            <strong>Log in</strong>
                                        </NavLink>
                                    )}
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

export default HeaderBar;