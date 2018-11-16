import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

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
  }
  
  render() {
    return (
      <div className="App">
       <div className="projects">
         Projects:
         {this.state.projects.map((project, key) => {
           return (
             <div key={key}>
             <h4>{project.name}</h4>
             <p>{project.description}</p>
             </div>
           )
         })}
       </div>
      </div>
    );
  }
}

export default App;
