import React, {Component} from 'react';
import './App.css';
import HeaderExampleBlock from './Header';
import Welcome from './Welcome';

class App extends Component {
    render() {
        return (<div className="App">
            <HeaderExampleBlock />
            <Welcome />

        </div>);
    }
}

export default App;
