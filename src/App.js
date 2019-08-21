import React, { Component } from 'react';
import './App.css';

import MemoFunction from './components/MemoFunction';
import NormalFunction from './components/NormalFunction';

class App extends Component {

  state = {
    timer: ''
  }

  componentDidMount() {
    setInterval(function() { 
      this.setState({timer: new Date()});
    }.bind(this), 1000)
  }

  render() {
    return (
      <div className="App">
          <MemoFunction />
          <NormalFunction />
          <span>{this.state.timer.toString()}</span>
      </div>
    );
  }
}

export default App;
