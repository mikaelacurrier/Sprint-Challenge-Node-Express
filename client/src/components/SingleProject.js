import React, { Component } from 'react';
import axios from 'axios';

class SingleProject extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            projects: this.props.projects
         }
    }
    componentDidMount = () => {
      this.fetchProject(this.props.match.params.id);
    }
    componentWillReceiveProps(newProps) {
        if (this.props.match.params.id !== newProps.match.params.id) {
            this.fetchProject(newProps.match.params.id)
        }
    }
    
    fetchProject = id => {
        let oneProject = {
            name: this.state.name,
            description: this.state.description
        }
        axios.get(`https://localhost:9000/api/projects/${id}`, oneProject)
        .then(response => {
            this.setstate({ projects: response.data })
            console.log(response.data);
        })
    }
    render() { 
        return ( 
            <div>
            {this.state.projects.name}
            </div>
         );
    }
}
 
export default SingleProject;
 
