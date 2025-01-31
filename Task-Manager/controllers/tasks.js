const express = require('express')
const router = express.Router()

const getAllTasks = (req, res) => {
    res.send('All items from the file')
}

const createTask = (req, res) => {
    res.json(req.body)
}

const getTask = (req, res) => {
    res.send({id: req.params.id})
}

const updateTask = (req, res) => {
    res.send('create tassk')
}

const deleteTask = (req, res) => {
    res.send('create tassk')
}



module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
 };
