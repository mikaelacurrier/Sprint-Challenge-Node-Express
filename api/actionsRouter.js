const express = require('express');
const actions = require('../data/helpers/actionModel');
const projects = require('../data/helpers/projectModel');

const router = express.Router();

let projectNumb = [];

function getNumb = 
router.get('/', (req, res) => {
    const { id } = req.params;
    projects.get()
    .then(projectNumb = id)
});
console.log(projectNumb);

router.get('/', (req, res) => {
    if(req.body === null){
        res.json({ message: "There are no posts" })
    }
    actions.get()
    .then(foundActions => {
        res.json(foundActions)
    })
    .catch(err => {
        res.json({ message: "No actions Found"})
    });
});
router.get('/:id', (req, res) => {
    const { id } = req.params;
    actions.get(id)
    .then(singleAction => {
        res.json(singleAction)
    })
    .catch(err => {
        res.status(500).json({ message: "There is not a project with that id"});
    });
});

router.post('/', (req, res) => {
    const { description, notes, project_id } = req.body;
    //if (project_id !== activeProjects)
    if( !notes  || !description || description.length > 128 || !project_id ){
        res.status(500).json({ message: "Invalid Entry - must have Project ID, description with 128 character or fewer, and notes" })
    }
    actions.insert({ description, notes, project_id })
    .then(action => {
        res.json(action)
    })
    .catch(err => {
        res.status(500).json({ message: "Error posting action" });
    });
});
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { description, notes, project_id } = req.body;
    if(!description || !notes || !project_id || description.length > 128) {
        res.status(500).json({ message: "Invalid Entry - must have Project ID, description with 128 character or fewer, and notes"})
    };
    actions.update(id, { description, notes, project_id })
    .then(count => {
        res.json(count)
    })
    .catch(err => {
        res.status(500).json({ message: "Unable to update action" });
    });
});
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    if( !id ) {
        res.status(404).json({ message: "No project with that ID exists" })
    };
    actions.remove(id)
    .then(count => {
        res.json(count)
    })
    .catch(err => {
        res.status(500).json({ message: "Action failed to delete" })
        console.log(err);
    });
});

module.exports = router;