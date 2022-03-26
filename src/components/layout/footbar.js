import React from "react"

function FooterBar() {
    return (
        <footer className="footer p-1">
            <div className="content is-small has-text-centered">
                <i>No bears were hurt in the making of this site - so say us, the Kalmany Electoral Commission</i><br/>
                kalmany-beetroot v{process.env.BUILD_DISPLAY_NAME} &#169; 2022 nturtaynment
            </div>    
        </footer>
    )
}

export default FooterBar;