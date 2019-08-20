  import React from 'react';
  import './App.css';
  import CardList from './component/cardlist/cardlist';
  import SearchBar from './component/searchBar/searchbar'


  class App extends React.Component{
    constructor(){
      super();
      this.state = {
          monsters: [],
          searchField:""
      }
    }
    async componentDidMount(){
      await fetch('https://jsonplaceholder.typicode.com/users')
        .then( response => response.json())
        .then(users => this.setState({monsters: users}))
    }
    getSearch=(e) =>{
      this.setState({
        ...this.state,[e.target.name]:e.target.value
      })
    }
  render(){
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>"Monstore" House</h1>
        <SearchBar getSearch={this.getSearch} placeholder={"Search a Monster"} searchField={this.state.searchField}></SearchBar>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
  }

  export default App;
