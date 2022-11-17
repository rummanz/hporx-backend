
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var assessmentAttemptsSchema = new Schema({
    tasker: {
        type: String,
        ref: 'taskers'
    },
    attemptsTaken: {
        type: Number
    },
    industy: {
        type: String,
        ref: 'industries'
    },
    addedby: {
        type: String,
        ref: 'users'
    },
    lastModifiedBy: {
        type: String,
        ref: 'users'
    }
},
    {
        timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
        usePushEach: true
    }
)


module.exports = mongoose.model('assessmentAttempts', assessmentAttemptsSchema)