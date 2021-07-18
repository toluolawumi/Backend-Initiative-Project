let rentals = [];


exports.createrental = (req,res) => {
    //check to see if there is a request body and return error message
    if(!req.body){
        return res.status(400).json({message: "No request input, invalid request"})
    } 
    const rental = req.body
    //give rental an id
    rental.id = rentals.length + 1
    //push rental details into the rentals array
    rentals.push(rental);
    //return succesful message with updated array
       return res.status(200).json({message: "new rental created and added successfully", rentals})

}

exports.allrentals = (req,res) => {
    //check if the array is empty and return error if yes
    if (rentals.length === 0){
        return res.status(404).json({message: "no rentals found"})
    }
    //else return all rentals in the array
    return res.status(200).json({message: "All rentals", rentals})
}

exports.fetchSinglerental = (req,res) => {
    //check for the rental in the array where the request id matches the id in the array
    const rental = rentals.find(rental => rental.id === parseInt(req.params.id))
    //if no rental is found, return error
    if(!rental) {
        return res.status(404).json({message: "rental doesn't exist"})
    }
    //if rental found, return rental details
    return res.status(200).json({message: "rental found", rental})
}

exports.updateSinglerental = (req,res) => {
    //check to see if there is a request body and return error message
    if(!req.body.title){
        return res.status(400).json({message: "No request input, invalid request"})
    } 
    //check for the rental in the array where the request id matches the id in the array
    const rental = rentals.find(rental => rental.id === parseInt(req.params.id))
    //if no rental is found, return error
    if(!rental) {
        return res.status(404).json({message: "rental doesn't exist"})
    }
    
    rental.title = req.body.title

    return res.status(200).json({message: "rental updated successfully, New rental details below", rental})
}

exports.deleteSinglerental = (req,res) => {
    //check for the rental in the array where the request id matches the id in the array
    const rental = rentals.find(rental => rental.id === parseInt(req.params.id))
    //if no rental is found, return error
    if(!rental) {
        return res.status(404).json({message: "rental doesn't exist"})
    }
    
    const index = rentals.indexOf(rental)
    rentals.splice(index, 1)
    return res.status(200).json({message: "rental deleted succesfully", rentals})
}
