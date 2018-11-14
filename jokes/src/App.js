import React, { Component } from 'react';
import './App.css';
import JokesStore from "./jokeStore.js";

class AllJokes extends Component { //YELLOW
    render() {
        const lis = this.props.jokes.map((j, i) => (<li key={i}>{j}</li>))
        return (
            <ul>
                {lis}
            </ul>
        );
    }
}

class AddJoke extends Component { //RED
    constructor(props) {
        super(props);
        this.state = { newJoke: "" }
    }
    handleChange = (evt) => {
        this.setState({ newJoke: evt.target.value })
    }
    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.saveJoke(this.state.newJoke);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.newJoke} onChange={this.handleChange} /><br />
                    <button>Save</button>
                </form>
            </div>
        );
    }
}


class App extends Component {

    constructor(props) {
        super(props);
        this.state = { jokes: props.JokeStore.jokes };

    }

    saveJoke = (joke) => {
        this.props.JokeStore.addJoke(joke);
        this.setState({ jokes: this.props.JokeStore.jokes });
    }

    render() {
        return (
            <div className="container row">
                <p>Random Joke: <span> {this.props.JokeStore.getRandomJoke()}</span></p>
                <div className="col1">
                    <p className="head">Add Joke</p>
                    <AddJoke saveJoke={this.saveJoke} />
                </div>
                <div className="col2">
                    <p className="head">All Jokes</p>
                    <AllJokes jokes={this.state.jokes} />
                </div>
                <p><b>The current state : </b><br/>
                {this.state.jokes.toString()}</p>
            </div>
        );
    }
}



export default App;