const db = require("../models");
const express = require("express");
const app = express();

module.exports = function (app) {
  // retreive all workouts
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}, (err, data) => {
      if (err) throw err;
      res.json(data);
    });
  });

  // add a new exercise to the workout
  app.post("/api/workouts/:id", (req, res) => {
    db.Workout.findOneAndUpdate(
      { _id: params.id },
      { $push: { exercises: body } },
      {
        upsert: true,
        useFindModify: false,
      },
      (updatedWorkout) => {
        res.json(updatedWorkout);
      }
    );
  });

  // create a workout
  app.post("/api/workouts", (req, res) => {
    db.Workout.create({}).then((newWorkout) => {
      res.json(newWorkout);
    });
  });
};
