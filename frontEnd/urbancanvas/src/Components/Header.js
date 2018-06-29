import React from 'react'
import {Link} from 'react-router-dom'

const Header = (props) => {
    return (
        <React.Fragment>
            <header className="App-header">
                <h1 className="App-title">
                    Urban Canvas
                </h1>
            </header>
            <div className="nav">
                <button className="navbut1">
                    <Link className="home" to="/">HOME</Link>
                </button>
                <button className="navbut2">
                    <Link className="art" to="/Art">ART</Link>
                </button>
            </div>
        </React.Fragment>
    )
}
export default Header