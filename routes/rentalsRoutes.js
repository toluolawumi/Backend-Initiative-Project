const express = require('express');
const router = express.Router();

//require the rental controller
const rentalController = require('../controllers/rentalController');

//post request to create a new rental
router.post('/rentals', rentalController.createrental);

//get request to get all rentals
router.get('/rentals', rentalController.allrentals)

//get request to fetch single rental
router.get('/rentals/:id', rentalController.fetchSinglerental)

//put request to update a single rental
router.put('/rentals/:id', rentalController.updateSinglerental)

//delete request to delete a rental
router.delete('/rentals/:id', rentalController.deleteSinglerental)


module.exports = router;