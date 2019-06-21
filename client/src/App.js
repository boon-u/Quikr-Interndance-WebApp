import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/home.component';
// import Display from './components/display';

class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Router>
        
        <div>
          <Route path="/" component={Home}/>
        </div>
      </Router>



    );
  }
}

export default App;