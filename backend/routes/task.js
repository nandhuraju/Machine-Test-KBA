const express = require("express");
const Task = require("../models/taskSchema");
const router = express.Router();


router.post("/add", async (req, res) => {
  const { title,description,status,priority,createdAt} = req.body;

  const recipe = new Task({
    title,
    description,
    status,
    priority,
    createdAt
  });

  try {
    await recipe.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
