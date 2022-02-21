import React from "react";

import { NavLink, Outlet } from "react-router-dom";

function UserPage({signOut}) {


    return (
      
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
                          <li><NavLink to="/user">User Details</NavLink></li>
                          <li><NavLink to="/user/logout">Logout</NavLink></li>
                      </ul>
                      <p className="menu-label">
                          User Constituency
                      </p>
                      <ul className="menu-list">
                          <li><NavLink to="/user/demography">Constituency Demography</NavLink></li>
                          <li><NavLink to="/user/voting">Constituency Candidates</NavLink></li>
                          <li><NavLink to="/user/election">Constituency Election</NavLink></li>
                      </ul>
                  </aside>
              </div>
              <div className="column">
                <Outlet/>
              </div>
          </div>
      </section>
    )
};

export default UserPage;
