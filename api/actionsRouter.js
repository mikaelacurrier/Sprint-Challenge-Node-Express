const express = require('express');
const actions = require('../data/helpers/actionModel');

const router = express.Router();

// router.get('/', (req, res) => {
//     if(req.body === null){
//         res.json({ message: "There are no posts" })
//     }
//     actions.get()
//     .then(foundActions => {
//         res.json(foundActions)
//     })
//     .catch(err => {
//         res.json({ message: "No actions Found"})
//     });
// });
// router.get('/:id', (req, res) => {
//     const { id } = req.params;
//     actions.get(id)
//     .then(singleAction => {
//         res.json(singleAction)
//     })
//     .catch(err => {
//         res.status(500).json({ message: "There is not a project with that id"});
//     });
// });
// router.post('/', (req, res) => {
//     const { name, description } = req.body;
//     if( !name  || !description ){
//         res.status(500).json({ message: "Invalid Entry" })
//     }
//     actions.insert()
//     .then(project => {
//         res.json(project)
//     })
//     .catch(err => {
//         res.status(500).json({ message: "Error posting project" });
//     });
// });
// router.put('/:id', (req, res) => {
//     const { id } = req.params;
//     const projectBody = req.body;
//     if(projectBody === null) {
//         res.status(500).json({ message: "must have input"})
//     };
//     actions.update(id, projectBody)
//     .then(count => {
//         res.json(count)
//     })
//     .catch(err => {
//         res.status(500).json({ message: "Unable to update project" });
//     });
// });
// router.delete('./:id', (req, res) => {
//     const { id } = req.params;
//     if( !id ) {
//         res.status(404).json({ message: "No project with that ID exists" })
//     };
//     actions.remove(id)
//     .then(count => {
//         res.json(count)
//     })
//     .catch(err => {
//         res.status(500).json({ message: "Project failed to delete" })
//         console.log(err);
//     });
// });

module.exports = router;