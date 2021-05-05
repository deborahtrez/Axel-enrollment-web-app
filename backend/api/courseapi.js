const express = require ('express')
const router = express.Router()
const coursedb = require('../models/coursedb')

//display all courses
router.get('/', (request, response) =>{
    coursedb.find()
    .then(courses => {
        response.json(courses)
        console.log(courses)
    })
    .catch(error => {response.json(error)})
})

//display one todo item by id
router.get('/:id', (request, response) => {
    coursedb.findById(request.params.id)
    .then(courses => {response.json(courses)})
    .catch(error => {response.json(error)})
})

//add new todo to list
router.post('/admin', (request, response) => {
    const list = new coursedb({
        college: request.body.college,
        programme: request.body.programme,
        essentialSubjects: request.body.essentialSubjects,
        relevantSubjects: request.body.relevantSubjects,
        desirableSubjects: request.body.desirableSubjects
    })

    list.save()
    .then(courses => {response.json(courses)})
    .catch(error => {response.json(error)})
})

//edit or update course
router.post('/edit:id', (request, response) => {
    coursedb.findById(request.params.id)
    .then(courses => {
        courses.college = request.body.college,
        courses.programme = request.body.programme,
        courses.essentialSubjects = request.body.essentialSubjects,
        courses.relevantSubjects = request.body.relevantSubjects,
        courses.desirableSubjects = request.body.desirableSubjects,


        courses.save()
        .then(() => {response.json('Course has been updated')})
        .catch(() => {response.json('Course updating failed')})
    })
    .catch(error => {response.json(error)})
})

//delete a to do item
router.delete('/:id', (request, response) => {
    coursedb.findByIdAndDelete(request.params.id)
    .then( () => {response.json('Course has been deleted')})
    .catch(error => (response.json(error)))
})

module.exports = router
