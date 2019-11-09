import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ""
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => {
      return response.json().then(users => this.setState({ robots: users }))
      
    })
  }
  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };
  render() {
    const { robots, searchField} = this.state;
    const filtRobots = robots.filter(robots => {
      return robots.name
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });
    return !robots ?
      <h1>Loading, please wait...</h1> :
      <div className='container'>
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filtRobots} />
          </ErrorBoundary>
          
        </Scroll>
        
      </div>
    
  }
}
export default App;
