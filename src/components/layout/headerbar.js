import React from "react"
import { NavLink, useLocation } from "react-router-dom"
import TickerTape from "./tickertape"
import styles from "./headerbar.module.css"
import kec_logo from '../../images/keclogo.png';

function HeaderBar() {
    const [navbarShow, setNavbarShow] = React.useState('');
    const [colorClass, setColorClass] = React.useState('');
    let location = useLocation();

    React.useEffect(() => {
        if(location.pathname.match("\/news"))
        {
            setColorClass("is-info")
        }
        else if(location.pathname.match("\/contact"))
        {
            setColorClass("is-link")
        }
        else if(location.pathname.match("\/codex") || location.pathname.match("\/user") )
        {
            setColorClass("is-warning")
        }
        else
        {
            setColorClass("is-primary")
        }
    }, [location]);

    function showNavbar()
    {
        (navbarShow === '') ? setNavbarShow('is-active') : setNavbarShow('')
    }
    return (
        <section className={"hero is-small " + colorClass}>
                <div className="hero-body">
                    <img alt="kec_logo" className={`image is-96x96 ${styles.klogo}`} src={kec_logo}/>
                    <p className={`title is-hidden-mobile ${styles.ktitletext}`}>The Kalmany Electoral Commission</p>
                    <p className={`title is-hidden-tablet ${styles.ktitletext}`}>KEC</p> 
                </div>
                <nav className={"navbar " + colorClass}>
                    <div className="navbar-brand">
                        <a role="button" className="navbar-burger" onClick={showNavbar}>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div id="navbarKalmany" className={"navbar-menu " + colorClass + " " + navbarShow}>
                        <div className="navbar-end">
                            <NavLink to="/" className="navbar-item" onClick={showNavbar}>
                                Home
                            </NavLink>
                            <NavLink to="/news" className="navbar-item" onClick={showNavbar}>
                                News
                            </NavLink>
                            <NavLink to="/demography/0" className="navbar-item" onClick={showNavbar}>
                                Demographies
                            </NavLink>
                            <NavLink to="/election/latest/candidate/0" className="navbar-item" onClick={showNavbar}>
                                Election
                            </NavLink>
                            <NavLink to="/assembly/latest" className="navbar-item" onClick={showNavbar}>
                                Parliament
                            </NavLink>
                            <NavLink to="/rankings" className="navbar-item" onClick={showNavbar}>
                                Rankings
                            </NavLink>
                            <NavLink to="/codex" className="navbar-item" onClick={showNavbar}>
                                Information
                            </NavLink>
                            <NavLink to="/contact" className="navbar-item" onClick={showNavbar}>
                                Contact Us
                            </NavLink>
                            <div className="navbar-item">
                                <div className="buttons">
                                    <NavLink to="/user" className="button is-primary-invert" onClick={showNavbar}>
                                        <strong>Account</strong>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            <TickerTape/>
        </section>
        
    )
}

export default HeaderBar;