import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Welcome extends Component {
    render() {
        return (
            <div className="background-img">
                <section className="welcome">
                    <h1 className="subtitle">
                        Urban Canvas
                    </h1>
                    <p>Welcome to Urban Canvas the app where you can discover new and exciting
                        beautiful works of art located in non-traditional spaces throughout the city.
                    </p>

                    <Link className="goto" to="/Art">
                        < button className="enter">
                            Begin Your Adventure!</button>
                    </Link>

                </section>
            </div>
        );
    }
}

export default Welcome