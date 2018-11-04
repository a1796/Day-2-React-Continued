import React from "react";

export default function Forms() {
    return (
        <div>
            <NameForm />
            <EssayForm />
            <FlavorForm />
        </div>
    )
}


class NameForm extends React.Component {
    constructor(props) {
        super(props);
        //default value is hello friendo
        this.state = { value: 'Hello friendo' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        //sets the state as the current value in the input field
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h2>Name Form Demo</h2>

                <form onSubmit={this.handleSubmit}>
                    {/*  Prints the input field state value in real-time*/}
                    <p>{this.state.value.toUpperCase()}</p>
                    <label>
                        Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please write an essay about your favorite DOM element.'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h2>Essay Form Demo</h2>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay:
            <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            </div>
        );
    }
}
class FlavorForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'Coconut'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div>
        <form onSubmit={this.handleSubmit}>
            <h2>Flavor Form Demo</h2>
          <label>
            Pick your favorite flavor:
            {/* Default state = coconut */}
            {/* OnChange will call handleChange, which sets the current State VALUE to the new one */}
            {/* Handle submit alerts the iser with the VALUE of the current state */}
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Grapefruit">Grapefruit</option>
              <option value="Lime">Lime</option>
              <option value="Coconut">Coconut</option>
              <option value="Mango">Mango</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
        </div>
      );
    }
  }