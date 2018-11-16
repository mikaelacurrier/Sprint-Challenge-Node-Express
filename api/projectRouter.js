const express = require('express');
const projects = require('../data/helpers/projectModel');
const router = express.Router();

router.get('/', (req, res) => {
    if(req.body === null){
        res.json({ message: "There are no posts" })
    }
    projects.get()
    .then(foundProjects => {
        res.json(foundProjects)
    })
    .catch(err => {
        res.json({ message: "No Projects Found"})
    });
});
router.get('/:id', (req, res) => {
    const { id } = req.params;
    projects.get(id)
    .then(singleProject => {
        res.json(singleProject)
    })
    .catch(err => {
        res.status(500).json({ message: "There is not a project with that id"});
    });
});
router.post('/', (req, res) => {
    const {name, description } = req.body;
    if( !name  || !description ){
        res.status(500).json({ message: "Invalid Entry - must include name and description" })
    }
    projects.insert({name, description})
    .then(newProject => {
        res.json(newProject)
    })
    .catch(err => {
        res.status(500).json({ message: err })
        console.log(err);
    });
});
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const projectBody = req.body;
    if(!projectBody) {
        res.status(500).json({ message: "must have input"})
    };
    projects.update(id, projectBody)
    .then(count => {
        res.json(count)
    })
    .catch(err => {
        res.status(500).json({ message: "Unable to update project" });
    });
});
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    // if( !id ) {
    //     res.status(404).json({ message: "No project with that ID exists" })
    // };
    projects.remove(id)
    .then(count => {
        res.json(count)
    })
    .catch(err => {
        res.status(500).json({ message: "Project failed to delete" })
        console.log(err);
    });
});

module.exports = router;