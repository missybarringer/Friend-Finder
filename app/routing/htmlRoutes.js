// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
    // Load Survey
    app.get("/friends", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    });
      // If no matching route is found default to home
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}