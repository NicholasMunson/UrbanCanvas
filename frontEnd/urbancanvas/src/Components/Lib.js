import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Card from "./Card";




class Lib extends Component {
  constructor(props){
    super(props)
    this.state ={
      display: "a",
      artList:[]
    }
  }
  componentWillMount = () =>{
    let URL = "./"
  }

  render() {
    return (<div className="App">
    
      <Card />

    </div>);
  }
}

export default Lib;