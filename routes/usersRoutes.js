const express = require('express');
const router = express.Router();

//require the usercontroller
const UserController = require('../controllers/userController');

//post request to create a new user
router.post('/users', UserController.createUser);

//get request to get all users
router.get('/users', UserController.allUsers)

//get request to fetch single user
router.get('/users/:id', UserController.fetchSingleUser)

//put request to update a single user
router.put('/users/:id', UserController.updateSingleUser)

//delete request to delete a user
router.delete('/users/:id', UserController.deleteSingleUser)


module.exports = router;