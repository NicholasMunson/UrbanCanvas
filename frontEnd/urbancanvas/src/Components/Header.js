import React from 'react'
import {Link} from 'react-router-dom'

const Header = (props) => {
    return (
        <div className="header">
            <header className="App-header">
                <h1 className="App-title">
                    Urban Canvas
                </h1>
            </header>
            <div className="nav">
            <div className="button-container">
              <Link className="button-style home-atag" to="/">
                <button className="navbut">
                  HOME
                </button>
              </Link>
              <Link className="button-style art-atag" to="/Art">
                <button className="navbut">
                  ART
                </button>
              </Link>
            </div>
            </div>
        </div>
    )
}
export default Header
