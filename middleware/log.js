// Middleware function to log request details
function logger(req, res, next) {
    // Logging the original URL of the request
    console.log(req.originalUrl);
    // Passing control to the next middleware function in the stack
    next();
}

// Exporting the logger middleware function to be used in other parts of the application
module.exports = logger;
