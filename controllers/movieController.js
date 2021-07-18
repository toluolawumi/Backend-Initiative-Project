let movies = [];


exports.createMovie = (req,res) => {
    //check to see if there is a request body and return error message
    if(!req.body){
        return res.status(400).json({message: "No request input, invalid request"})
    } 
    const movie = req.body
    //give movie an id
    movie.id = movies.length + 1
    //push movie details into the movies array
    movies.push(movie);
    //return succesful message with updated array
       return res.status(200).json({message: "new movie created and added successfully", movies})

}

exports.allMovies = (req,res) => {
    //check if the array is empty and return error if yes
    if (movies.length === 0){
        return res.status(404).json({message: "no movies found"})
    }
    //else return all movies in the array
    return res.status(200).json({message: "All movies", movies})
}

exports.fetchSingleMovie = (req,res) => {
    //check for the movie in the array where the request id matches the id in the array
    const movie = movies.find(movie => movie.id === parseInt(req.params.id))
    //if no movie is found, return error
    if(!movie) {
        return res.status(404).json({message: "movie doesn't exist"})
    }
    //if movie found, return movie details
    return res.status(200).json({message: "movie found", movie})
}

exports.updateSingleMovie = (req,res) => {
    //check to see if there is a request body and return error message
    if(!req.body.title){
        return res.status(400).json({message: "No request input, invalid request"})
    } 
    //check for the movie in the array where the request id matches the id in the array
    const movie = movies.find(movie => movie.id === parseInt(req.params.id))
    //if no movie is found, return error
    if(!movie) {
        return res.status(404).json({message: "movie doesn't exist"})
    }
    
    movie.title = req.body.title

    return res.status(200).json({message: "movie updated successfully, New movie details below", movie})
}

exports.deleteSingleMovie = (req,res) => {
    //check for the movie in the array where the request id matches the id in the array
    const movie = movies.find(movie => movie.id === parseInt(req.params.id))
    //if no movie is found, return error
    if(!movie) {
        return res.status(404).json({message: "movie doesn't exist"})
    }
    
    const index = movies.indexOf(movie)
    movies.splice(index, 1)
    return res.status(200).json({message: "movie deleted succesfully", movies})
}
