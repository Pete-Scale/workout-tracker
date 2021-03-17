const router = require("express").Router();
const db = require("../models");

router.post("/api/workouts", ({ body }, res) => {
    console.log(body);
    db.Workout.create(body)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

router.put("/api/workouts/:id", ({ params, body }, res) => {
    db.Workout.findByIdAndUpdate(params.id,
        {$push: {exercises: body}},
        {new: true})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
});

router.get("/api/workouts", (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: {$sum: "$exercises.duration"}
            }
        }
    ])
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: {$sum: "$exercises.duration"}
            }
        }
    ])
        .limit(7)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

module.exports = router;