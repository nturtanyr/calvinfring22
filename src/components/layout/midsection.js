import React from "react"
import styles from "./midsection.module.css"

function MidSection({ children }) {
return (
    
        <section className={`section ${styles.midSection}`}>
            <div className={`container ${styles.floatingContainer}`}>
                { children }
            </div>
        </section>
    )
}

export default MidSection;