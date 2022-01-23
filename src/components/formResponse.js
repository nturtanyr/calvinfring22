export default function FormResponse() {
    return (
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
                    <div className="control has-icons-left">
                        <input className="input" type="email" placeholder="Email"/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Citizen Password</label>
                    <div className="control has-icons-left">
                        <input className="input is-danger" type="password" placeholder="********"/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                        </span>
                    </div>
                </div>
                <div className={`field ${registrationState}`}>
                    <label className="label">Constituency Register</label>
                    <div className="select">
                        <select>
                        {
                            conList.map(con =>
                                <option value={con.id}>{con.name}</option>
                            )
                        }
                        </select>
                    </div>
                </div>
                <p className={loginState}>
                    <strong>If you are a citizen of Kalmany and haven't registered to vote, please register <a onClick={() => setRegisterShow(true)}>here</a>.</strong>
                </p>
                <p className={registrationState}>
                    <strong>If you are already registered as a citizen, you can login <a onClick={() => setRegisterShow(false)}>here</a>.</strong>
                </p>
            </section>
            <footer className="modal-card-foot">
                <button className={`button is-primary ${loginState}`}>Login</button>
                <button className={`button is-primary ${registrationState}`}>Register</button>
                <button className="button" onClick={() => setLoginShow(false)}>Cancel</button>
            </footer>
        </div>
    )
}