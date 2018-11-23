import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Route, Link } from 'react-router-dom';
import AllProjects from './components/AllProjects';
import SingleProject from './components/SingleProject';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      actions: []
    }
  }
  componentDidMount = () => {
    axios.get('http://localhost:9000/api/projects')
    .then(response => {
      this.setState({ projects: response.data })
    })
    .catch(err => {
      console.log(err)
    });
    axios.get('http://localhost:9000/api/actions')
    .then(response => {
      console.log(response.data)
      this.setState({ actions: response.data})
    });
  };
  
  render() {
    return (
      <div className="App">
      <Route exact path="/" render={props => (
        <AllProjects {...props} projects={this.state.projects} />
      )}/>
      <Route path="/projects/:id" render={props => (
        <SingleProject {...props} projects={this.state.projects} />
      )} />
      </div>
    );
  }
}

export default App;
