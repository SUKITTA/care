import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(){
    super();
    this.state = {person:[]}
  }

  componentDidMount(){
    axios.get('http://localhost:2403/user/')
    .then(res => 
      {
        const persons = res.data;
        this.setState({ persons });
      })
  }

} 

export default class PersonList extends React.Component {
  state = {
    name: '',
    person: []
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
  
    const user = {
        name: this.state.name
    };
    
    axios.post(`http://localhost:2403/user/`, { user })
      .then(res => {})
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">HELLO WORLD</h1>
        </header>
        <ul className="App-intro">
          {this.state.person.map(person=><li>{person.name}</li>)}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
      )
  }
}

//export default App;
