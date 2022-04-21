import React from "react";
import axios from "axios";

export default function ContactUs() {
    var nameInput = React.useRef('');
    var emailInput = React.useRef('');
    var messageInput = React.useRef('');

    const [messageSubmitting, setMessageSubmitting] = React.useState(false);
    const [messageSubmitted, setMessageSubmitted] = React.useState(false);
    const [successMessageShow, setSuccessMessageShow] = React.useState(false);
    const [dangerMessageShow, setDangerMessageShow] = React.useState(false);

    const [invalidEmail, setInvalidEmail] = React.useState(false);
    const [invalidMessage, setInvalidMessage] = React.useState(false);

    const submitMessage = ((event) => {
        setMessageSubmitting(true);

        let email = emailInput.current.value;
        let name = nameInput.current.value;
        let message = messageInput.current.value;

        if(name === "")
        {
            name = "anonymous";
        }

        if(email === "")
        {
            email = "no email provided";
        }

        if(invalidEmail || invalidMessage)
        {
            setMessageSubmitting(false);
        }
        else
        {
            postMessage( name, email, message )
        }
        
    });

    const postMessage = ((name, email, message) => {
        let options = {
            headers: {
                "Content-Type" : "application/json"
            }
        }

        let bodyContent = {
            name : name,
            email : email,
            message : message
        }

        axios.post(`${process.env.REACT_APP_API_ROOT}/contact`, bodyContent, options)
        .then(response => {
            setSuccessMessageShow(true);
            setMessageSubmitting(false);
            setMessageSubmitted(true);
        })
        .catch(response => {
            setDangerMessageShow(true);
            setMessageSubmitting(false);
            
        });
    });

    const handleChange = ((event) => {

        setInvalidEmail(!( emailInput.current.value.includes("@") || emailInput.current.value === ""));
        
        setInvalidMessage(messageInput.current.value === "");
    });

    return(
        <section className="section">
            <div className="content has-text-centered">
                <h2>Contact Information</h2>
                <p>If you wish to contact the Kalmany Electoral Commission with questions, suggestions, or perhaps need someone to talk to, the following form will be sent to our spokesperson <b>Esmeralda Hart</b> for review. You may also visit us at our physical headquarters if you'd rather speak to a representative in person.</p>
            </div>
            <div className="columns">
                <div className="column is-1" />
                <div className="column box has-background-light is-6">
                    <div className="field">
                        <label className="label">Name (as to be referred to in correspondence)</label>
                        <div className="control">
                            <input ref={nameInput} className="input" type="text" placeholder="Citizen name" />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Email (If you wish to receive a response)</label>
                        <p class={"help is-danger " + (invalidEmail ? "" : "is-hidden ")}>This email is invalid</p>
                        <div className="control has-icons-left">
                            <input ref={emailInput} className={"input " + (invalidEmail ? "is-danger " : "")} type="email" placeholder="Email" onChange={handleChange}/>
                            <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                            </span>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">How can we help?</label>
                        <p class={"help is-danger " + (invalidMessage ? "" : "is-hidden ")}>Please provide a message</p>
                        <div className="control">
                            <textarea  ref={messageInput} className={"textarea " + (invalidMessage ? "is-danger " : "")} placeholder="Is this all just a big conspiracy? etc..."  onChange={handleChange}></textarea>
                        </div>
                    </div>
                    <div className={"notification is-success " + (successMessageShow ? "" : "is-hidden")}>
                        <button className="delete" onClick={() => setSuccessMessageShow(false)}></button>
                        Your message has been submitted!
                    </div>
                    <div className={"notification is-danger " + (dangerMessageShow ? "" : "is-hidden")}>
                        <button className="delete" onClick={() => setDangerMessageShow(false)}></button>
                        There was an error sending your message - please try again later.
                    </div>

                    <div className="field is-grouped">
                        <div className="control">
                            <button className={"button " + (messageSubmitting ? "is-loading " : "") + (messageSubmitted ? "is-disabled" : "is-link")} onClick={submitMessage}>
                                {messageSubmitted ? "Sent" : "Send"}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="column is-2" />
                <div className="column is-3">
                    <div className="content">
                        <h3>Written Address</h3>
                        <p>
                            <address>
                            The Blu House<br/>
                            42 Herd Avenue<br/>
                            Gosewood<br/>
                            City of Kalbal<br/>
                            Kalmany<br/>
                            KA314159<br/>
                            </address>
                        </p>
                        <p>Please note any correspondence with <i>"probably important"</i> to be accurately prioritised.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}