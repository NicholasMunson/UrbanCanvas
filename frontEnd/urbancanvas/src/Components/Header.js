import React from 'react';
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <header className="header App-header">
      <h1>Urban Canvas</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Art">Art</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>
    </header>
  )
}

export default Header