import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import Welcome from './Welcome';

class App extends Component {
    render() {
        return (<div className="App">
            <Header className="header"/>
            <Welcome />

        </div>);
    }
}

export default App;
