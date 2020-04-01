const express = require('express')
const router = express.Router()
const Course = require('../models/course.model')

// Get all Courses by Campus
router.get('/', async (req, res) => {
    try {
        const courses = await courses.find()
        res.json(courses)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Get one Course by id
router.get('/:id', async (req, res) => {
    try {

    } catch (err) {
  
    }
})

// Create one Course
router.post('/', async (req, res) => {
    const course = new Course({
        name: req.body.name,
        subscribedChannel: req.body.subscribedChannel
      })
    
      try {
        const newCourse = await course.save()
        res.status(201).json(newCourse)
      } catch (err) {
        res.status(400).json({ message: err.message })
      }
})

// Update one Course by id
router.patch('/:id', async (req, res) => {
    try {

    } catch (err) {
  
    }
})

// Delete one Course by id
router.delete('/:id', async (req, res) => {
    try {

    } catch (err) {
  
    }
})

module.exports = router;