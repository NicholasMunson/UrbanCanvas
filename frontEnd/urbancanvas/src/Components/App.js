import React, {Component} from 'react';
import './App.css';
import HeaderExampleBlock from './Header';
import Welcome from './Welcome';
import Card from './Card';


class App extends Component {
    render() {
        return (<div className="App">
            <HeaderExampleBlock />
            <Welcome />
            <Card />

        </div>);
    }
}

export default App;
