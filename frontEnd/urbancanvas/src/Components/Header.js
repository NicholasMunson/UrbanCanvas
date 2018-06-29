import React from 'react'
import {Link} from 'react-router-dom'

const Header = (props) => {
    return (
        <div class="header">
            <header className="App-header">
                <h1 className="App-title">
                    Urban Canvas
                </h1>
            </header>
            <div className="nav"> 
            <div className="button-container">
                <button className="navbut">
                    <Link className="button-style" to="/">HOME</Link>
                </button>
                <button className="navbut">
                    <Link className="button-style" to="/Art">ART</Link>
                </button>
            </div>
            </div>
        </div>
    )
}
export default Header