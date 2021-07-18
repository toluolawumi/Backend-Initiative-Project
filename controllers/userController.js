let users = [];


exports.createUser = (req,res) => {
    //check to see if there is a request body and return error message
    if(!req.body){
        return res.status(400).json({message: "No request input, invalid request"})
    } 
    const user = req.body
    //give user an id
    user.id = users.length + 1
    //push user details into the users array
    users.push(user);
    //return succesful message with updated array
       return res.status(200).json({message: "new user created and added successfully", users})

}

exports.allUsers = (req,res) => {
    //check if the array is empty and return error if yes
    if (users.length === 0){
        return res.status(404).json({message: "no users found"})
    }
    //else return all users in the array
    return res.status(200).json({message: "All users", users})
}

exports.fetchSingleUser = (req,res) => {
    //check for the user in the array where the request id matches the id in the array
    const user = users.find(user => user.id === parseInt(req.params.id))
    //if no user is found, return error
    if(!user) {
        return res.status(404).json({message: "user doesn't exist"})
    }
    //if user found, return user details
    return res.status(200).json({message: "user found", user})
}

exports.updateSingleUser = (req,res) => {
    //check to see if there is a request body and return error message
    if(!req.body.firstname){
        return res.status(400).json({message: "No request input, invalid request"})
    } 
    //check for the user in the array where the request id matches the id in the array
    const user = users.find(user => user.id === parseInt(req.params.id))
    //if no user is found, return error
    if(!user) {
        return res.status(404).json({message: "user doesn't exist"})
    }
    
    user.firstname = req.body.firstname

    return res.status(200).json({message: "user updated successfully, New user details below", user})
}

exports.deleteSingleUser = (req,res) => {
    //check for the user in the array where the request id matches the id in the array
    const user = users.find(user => user.id === parseInt(req.params.id))
    //if no user is found, return error
    if(!user) {
        return res.status(404).json({message: "user doesn't exist"})
    }
    
    const index = users.indexOf(user)
    users.splice(index, 1)
    return res.status(200).json({message: "user deleted succesfully", users})
}
