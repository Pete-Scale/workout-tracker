const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Exercises = new Schema ({
    type: {
        type: String,
        trim: true
    },
    name: {
        type: String,
        trim: true
    },
    duration: {
        type: Number,
        trim: true
    },
    weight: {
        type: Number,
        trim: true
    },
    reps: {
        type: Number,
        trim: true
    },
    sets: {
        type: Number,
        trim: true
    },
    distance: {
        type: Number,
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