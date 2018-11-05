import React, { Component } from 'react';
import './App.css';
import ListDemo from "./ListDemo.js";
import ListDemo2 from "./ListDemo2.js";
import Forms from "./FormDemo.js";
import MultipleInput from "./MultipleInput.js";
import Jokes from "./jokeStore.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <ListDemo />
        <ListDemo2 />
        <Forms />
        <MultipleInput />
        
        </header>
      </div>
    );
  }
}

export default App;
