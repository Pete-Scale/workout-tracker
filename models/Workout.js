const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Exercises = new Schema ({
    type: {
        type: String,
        trim: true
    },
    type: {
        type: String,
        trim: true
    },
    type: {
        type: String,
        trim: true
    },
    type: {
        type: String,
        trim: true
    },
    type: {
        type: String,
        trim: true
    },
    type: {
        type: String,
        trim: true
    },
    type: {
        type: String,
        trim: true
    },
})

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [Exercises],
})

const Workout = mongoose.model("Workout", WorkoutSchema)

module.exports = Workout