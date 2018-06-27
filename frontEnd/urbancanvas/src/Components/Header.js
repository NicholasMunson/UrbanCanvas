import React from 'react';
import {Link} from 'react-router-dom'

const Header = (props) => {
    return (
        <header className="header App-header">
            <h1 className="App-title">
                Urban Canvas
            </h1>
            <button>
                <Link to="/">Home</Link>
            </button>
            <button>
                <Link to="/Art">Art</Link>
            </button>
        </header>
    )
}

export default Header