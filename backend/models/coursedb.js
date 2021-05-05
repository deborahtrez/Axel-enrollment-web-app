const mongoose = require('mongoose')

const Courses = new mongoose.Schema({
    college: {
        type:String
    },
    
    programme: {
        type:String
    },

    essentialSubjects: {
        type:String
    },

    relevantSubjects: {
        type:String
    },

    desirableSubjects: {
        type:String
    },
})

module.exports = mongoose.model('coursesmodel', Courses)