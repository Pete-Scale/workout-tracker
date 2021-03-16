const router = require("express").Router();
const db = require("../models");

router.post("/api/workouts", (req, res) => {
    console.log(req);
    db.Workout.create({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(err)
            res.status(400).json(err);
        });
});

// router.get("/api/workouts", ({ body }, res) => {
//     console.log(body);
//     db.Workout.create(body)
//         .then(dbWorkout => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });

// router.put("/api/workouts/:id",)

// router.get("/api/workouts",)

module.exports = router;