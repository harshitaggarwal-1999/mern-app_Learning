const mongoose = require("mongoose");
const User = require("../models/userModels");
const express = require("express");

const router = express.Router();



// create API
router.post("/", async (req, res) => {
    const { name, email, age } = req.body;

    try {
        const userAdded = await User.create({
            name: name,
            email: email,
            age: age,
        });

        res.status(201).json(userAdded);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message })
    }
});

// get API
router.get("/", async (req, res) => {

    try {
        const showAll = await User.find();
        res.status(200).json(showAll);
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message });
    }
})

// get single user API

router.get("/:id", async (req, res) => {
    const { id } = req.params; // to extract from URL
    try {
        const showOne = await User.findById({ _id: id });
        res.status(200).json(showOne);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
})

// delete single user API
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const showOne = await User.findByIdAndDelete({ _id: id });
        res.status(200).json(showOne)
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
})

// update a single user
router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;
    try {
        const updateData = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updateData);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
})


// router.get("/", (req, res) => {
//     res.send("api running successfully");
// })

module.exports = router;