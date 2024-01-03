
// Navbar.js
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './compo.css';

class Navbar extends Component {
  render() {
    const { mode, toggleMode } = this.props;

    return (
      <>
        <nav className={`navbar navbar-expand-lg sticky-top navbar-dark bg-dark`}>
          <NavLink className="navbar-brand" to="/" style={{ color: '#fff' }}>
            NewsiFy
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ color: '#fff' }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink className="nav-link" exact="true" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact="true" to="/business">
                  Business
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact="true" to="/entertainment">
                  Entertainment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact="true" to="/health">
                  Health
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact="true" to="/science">
                  Science
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact="true" to="/sports">
                  Sports
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact="true" to="/technology">
                  Technology
                </NavLink>
              </li>
            </ul>
            <div className={`form-check form-switch text-${mode === 'light' ? 'grey' : 'white'}`}>
            <input
              className="form-check-input"
              onClick={toggleMode}
              type="checkbox"
              role="switch"
              id="darkmode-toggle"
            />
            <label className="form-check-label" htmlFor="darkmode-toggle">
              {/* {mode === 'light' ? 'Enable Dark Mode' : 'Disable Dark Mode'} */}
            </label>
          </div>
          </div>

          
        </nav>
      </>
    );
  }
}

export default Navbar;
