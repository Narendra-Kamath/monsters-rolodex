import React, { Component } from 'react';
import './App.css';

import CardList from './components/card-list/card-list.component';
import { Header } from './components/header/header.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFieldInput: ''
    }

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
      this.setState({ monsters : users }, () => { console.log(this.state) })
      // this.setState((prevState, prevProp) => {
      //   // return { something: this.state.something + 1 } // instead of this
      //   // return { something: prevState.something + 1 } // use this
      // }) //to be used when the state value is used in set state
    })

  }
  
  handleChange = (e) => {
    this.setState({ searchFieldInput: e.target.value })
  }

  render() {
    const { monsters, searchFieldInput } = this.state
    let filteredMonsters = monsters.filter((item) => {
      return item.name.toLowerCase().includes(searchFieldInput.toLowerCase())
    })

    return (
      <div className="app-container">
        <Header handleChange={this.handleChange}></Header>
        <CardList monsters = {filteredMonsters}> 
        </CardList>
      </div>
    )
  }
}

export default App;
