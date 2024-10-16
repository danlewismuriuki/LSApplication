const express = require('express');
const router = express.Router();
const projectController = require('../controller/projectController');

router.post('/:customerId', projectController.createProject);
router.get('/', projectController.getAllProjects);
router.get('/:id', projectController.getProjectById);
router.put('/:id', projectController.updateProject);
router.delete('/:id', projectController.deleteProject);

module.exports = router;

