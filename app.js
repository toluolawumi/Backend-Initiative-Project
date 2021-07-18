const express = require('express');
const app = express();
port = 6000;

//middleware
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

//require routes
const usersRoutes = require('./routes/usersRoutes');
app.use(usersRoutes)

const moviesRoutes = require('./routes/moviesRoutes');
app.use(moviesRoutes)

const rentalsRoutes = require('./routes/rentalsRoutes');
app.use(rentalsRoutes)

// Create a basic express route
app.get('/', (req, res) => res.json({ message: "Welcome to a basic directory"}));


//port listen
app.listen(port)
    console.log(`app listening on port ${port}`)