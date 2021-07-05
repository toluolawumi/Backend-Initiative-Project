const users = [];

//user model
//FirstName, LastName, Age, Country
exports.createUser = (req,res) => {
    //fetch user details from request body
    const user = req.body;
    users.push(user);
        return res.status(200).json({message: "new user created and added to records", users})
}

exports.allUsers = (req,res) => {
        if (!users){
            return res.status(404).json({message: 'no user found'})
        } else {
            return res.status(200).json({message: "All users", users})
        }
    
}
