const express = require('express');
const routers = express.Router()

const { getAllTasksController, createTaskController, selectTaskByIDController, updateTaskController, deleteTaskController, putUPdateTaks } = require('../controllers/task_controller')

routers.get('/', getAllTasksController)
routers.post('/', createTaskController)
routers.get('/:id', selectTaskByIDController)
routers.patch('/:id', updateTaskController)
routers.delete('/:id', deleteTaskController)
routers.put('/:id', putUPdateTaks)

module.exports = routers