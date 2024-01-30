// Importing Express framework
const express = require('express');
// Creating an instance of Express router
const router = express.Router();

// Route to handle GET requests to the root path "/"
router.get('/', (req, res) => {
    // Logging the value of the "name" query parameter
    console.log(req.query.name);
    // Sending a response with the message "User List"
    res.send('User List');
});

// Route to handle GET requests to the "/new" path
router.get('/new', (req, res) => {
    // Rendering the "users/new" view
    res.render("users/new");
});

// Route to handle POST requests to the root path "/"
router.post('/', (req, res) => {
    // Simulating validation; in this case, validation is set to false
    const isValid = false;
    if (isValid) {
        // Adding a new user to the users array
        users.push({ firstName: req.body.firstName });
        // Redirecting to the user detail page with the ID of the newly added user
        res.redirect(`/users/${users.length - 1}`);
    } else {
        // If validation fails, rendering the "users/new" view with the provided data
        console.log("Error");
        res.render("users/new", { firstName: req.body.firstName });
    }
    // Sending a response with the message "Hi" (unreachable code)
    res.send("Hi");
});

// Route to handle requests to "/:id"
router.route('/:id')
    // Handling GET requests to retrieve user details by ID
    .get((req, res) => {
        console.log(req.user);
        res.send(`Get User With ID ${req.params.id}`);
    })
    // Handling PUT requests to update user details by ID
    .put((req, res) => {
        res.send(`Update User With ID ${req.params.id}`);
    })
    // Handling DELETE requests to delete user details by ID
    .delete((req, res) => {
        res.send(`Delete User With ID ${req.params.id}`);
    });

// Array to store user data
const users = [{ name: "Kyle" }, { name: "Sally"}];
// Middleware function to retrieve user data by ID
router.param("id", (req, res, next, id) => {
    console.log(id);
    req.user  = users[id];
    next();
});

// Exporting the router to be used in other parts of the application
module.exports = router;
