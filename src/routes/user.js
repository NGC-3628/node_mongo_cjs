const express = require('express');
const router = express.Router()
const userSchema = require('../models/user');
const user = require('../models/user');


//endpoint
//ADDING user to DB
router.post('/users', (req, res) => {
    const user = userSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error }));
});

//endpoint
//SHOWING ALL users
router.get('/users', (req, res) => {
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error }));
});


//endpoint
//SHOWING ONE user by ID
router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error }));
});


//endpoint
//UPDATE ONE user
router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, age, email } = req.body
    userSchema
        .updateOne({ _id: id }, {$set: {name, age, email}})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error }));
});


//endpoint
//DELETE users
router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error }));
});

module.exports = router;

