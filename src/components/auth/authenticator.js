

export default function AuthenticatorK() {
    return (
        <Authenticator loginMechanisms={['email']} signUpAttributes={['name', 'email','custom:constituency']} components={{
            SignUp: {
              FormFields() {
                const { validationErrors } = useAuthenticator();
    
                return (
                  <>
                    {/* Re-use default `Authenticator.SignUp.FormFields` */}
                    <Authenticator.SignUp.FormFields />
    
                    {/* Append & require Terms & Conditions field to sign up  */}
                    <SelectField 
                      label="Constituency"
                      errorMessage={validationErrors.constituencySelect}
                      hasError={!!validationErrors.constituencySelect}
                      name="custom:constituency"
                    >
                      <option value={0}>Select home constituency</option>{
                        conList.map(con =>
                            <option key={`con-${con.id}`} value={con.id}>{con.name}</option>
                        )
                      }
                    </SelectField>
                  </>
                );
              },
            },
          }}
          services={{
            async validateCustomSignUp(formData) {
              if (formData["custom:constituency"].value === 0) {
                return {
                  constituencySelect: 'You must pick a home constituency.',
                };
              }
            },
          }}>
              {({ signOut, user }) => (
                <section className="section">
                    <div className="content has-text-centered">
                        <h2>Your Account</h2>
                        <p>You may access the user area from this page</p>
                    </div>
                    <div className="columns">
                        <div className="column is-one-quarter">
                            <aside className="menu">
                                <p className="menu-label">
                                    User Account
                                </p>
                                <ul className="menu-list">
                                    <li><a onClick={() => setSelectedIndex(0)}>User Details</a></li>
                                    <li><a onClick={() => setSelectedIndex(1)}>Logout</a></li>
                                </ul>
                                <p className="menu-label">
                                    User Constituency
                                </p>
                                <ul className="menu-list">
                                    <li><a onClick={() => setSelectedIndex(2)}>Constituency Demography</a></li>
                                    <li><a onClick={() => setSelectedIndex(3)}>Constituency Candidates</a></li>
                                    <li><a onClick={() => setSelectedIndex(4)}>Constituency Election</a></li>
                                </ul>
                            </aside>
                        </div>
                        <div className="column">
                          {determinePage(selected_index, user)}
                        </div>
                    </div>
                </section>
              )}
          </Authenticator>
    )
}