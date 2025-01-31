const express = require('express')
const router = express.Router()
const Task = require('../models/task.js')
const getAllTasks = (req, res) => {
    res.send('All items from the file')
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
    // const task = await Task.create({name: req.body.name, completed: req.body.completed})
    res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
        // res.status(error.status).json({msg: error.message})
    }
    
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
