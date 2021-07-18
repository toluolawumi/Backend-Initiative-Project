const express = require('express');
const router = express.Router();

//require the movie controller
const MovieController = require('../controllers/movieController');

//post request to create a new movie
router.post('/movies', MovieController.createMovie);

//get request to get all movies
router.get('/movies', MovieController.allMovies)

//get request to fetch single movie
router.get('/movies/:id', MovieController.fetchSingleMovie)

//put request to update a single movie
router.put('/movies/:id', MovieController.updateSingleMovie)

//delete request to delete a movie
router.delete('/movies/:id', MovieController.deleteSingleMovie)


module.exports = router;