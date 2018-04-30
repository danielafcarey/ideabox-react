import React, { Component } from 'react';
import './App.css';
import Input from './Input';
import IdeaList from './IdeaList';


class App extends Component {
  constructor() {
    super()

    this.state = {
      ideas: [] 
    }

    this.setIdeaInState = this.setIdeaInState.bind(this);
  }

  setIdeaInState(ideaObj) {
    this.setState({ ideas: [...this.state.ideas, ideaObj] });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IdeaBox</h1>
        </header>
        <Input setIdeaInState={ this.setIdeaInState } />
        <IdeaList ideasArray={ this.state.ideas } />
      </div>
    );
  }
}

export default App;
