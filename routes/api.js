const router = require("express").Router();
const db = require("../models");

router.post("/api/workouts", ({ body }, res) => {
    console.log(body);
    db.Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// router.put("/api/workouts/:id",)

// router.get("/api/workouts",)

