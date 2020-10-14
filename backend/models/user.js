const mongoose = require('mongoose')
const { Schema } = mongoose

// ['candidate', 'employer']

/**
 * Jobs {
 *  JobName : 
 *  Description :
 *  Resumes : [....]
 * }
 */
const user = new Schema({

    userType: String,
    jobApplied: [String],

    username: String,
    name: {
        firstName: String,
        lastName: String
    },
    password: String,
    address: String,
    age: Number,
    email: String,
    linkedIn: String,

    position: String,
    company: String,
    Jobs: [{
        company: String,
        JobName: String,
        Description: String,
        Resumes: [
            {
                nameCan: Object,
                emailCan: String,
                resumeFile: String,
            }
        ]
    }]
})

module.exports = mongoose.model("User", user) //changing namespace