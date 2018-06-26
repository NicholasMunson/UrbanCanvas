import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Welcome extends Component {
    render() {
        return (
            <section className="welcome">
                <h1>Urban Canvas</h1>
                <p>Welcome to Urban Canvas the app where you can discover new and exciting
                    beautiful works of art located in non-traditional spaces throughout the city.
                </p>
                <button>
                    <Link to="/Art">Begin your adventure!</Link>
                </button>
            </section>
        );
    }
}

export default Welcome;