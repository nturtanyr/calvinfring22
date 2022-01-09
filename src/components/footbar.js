import React from "react"
import styles from "./footbar.module.css"

function FooterBar() {
    return (
        <footer className={`footer p-1 ${styles.footer}`}>
            <div className="content is-small has-text-centered">
                <i>No bears were hurt in the making of - so say us, the Kalmany Electoral Commission</i><br/>
                (c) 2022 nturtaynment
            </div>    
        </footer>
    )
}

export default FooterBar;