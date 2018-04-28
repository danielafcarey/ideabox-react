import React, { Component } from 'react';
import './App.css';
import Input from './Input';
import IdeaList from './IdeaList';

class App extends Component {
  constructor() {
    super()

    this.state = {}
  }


  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IdeaBox</h1>
        </header>
        <Input />
        <IdeaList />
      </div>
    );
  }
}

export default App;
