const Task = require('../models/Task')
const asyncWrapper = require('../middileware/async');
const createCustomError = require('../errors/custom-error')

const getAllTasksController = asyncWrapper(async (req, res) => {
    const task = await Task.find({})
    res.status(200).json({ status: true, data: task })

})
const createTaskController = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ status: true, data: task })

})

const selectTaskByIDController = asyncWrapper(async (req, res) => {
    const task = await Task.findOne({ _id: req.params.id })
    if (!task) {
        return next(createCustomError(`No task found with id ${req.params.id}`, 404));
    }
    res.status(200).json({ status: true, data: task })

})

const updateTaskController = asyncWrapper(async (req, res) => {
    const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true });
    if (!task) {
        return next(createCustomError(`No task found with id ${req.params.id}`, 404));
    }
    res.status(200).json({ status: true, message: 'Task Updated successfully' })

})

const deleteTaskController = asyncWrapper(async (req, res) => {
    const task = await Task.findOneAndDelete({ _id: req.params.id })
    if (!task) {
        return next(createCustomError(`No task found with id ${req.params.id}`, 404));
    }
    res.status(200).json({ status: true, message: 'Task deleted successfully' })
})

const putUPdateTaks = asyncWrapper(async (req, res) => {
    const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true, runValidators: true
    })
    if (!task) {
        return next(createCustomError(`No task found with id ${req.params.id}`, 404));
    }
    res.status(201).json({ status: true, message: 'Task Updated successfully' })
})

module.exports = {
    getAllTasksController,
    createTaskController,
    selectTaskByIDController,
    updateTaskController,
    deleteTaskController,
    putUPdateTaks
}