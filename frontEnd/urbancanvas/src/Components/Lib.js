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
    let URL = "./dumb.json";
    fetch(URL)
    .then(res => res.json())
    .then(res => {
      this.setState({
        artList:res
      })
    })
  }

  render() {
    return (
    <div className="cardLib">
      
      <Card />

    </div>);
  }
}

export default Lib;