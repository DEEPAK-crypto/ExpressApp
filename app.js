var express = require("express");
var app = express();

// "/" => "This is an Express App"
app.get("/", function(req, res) {
    res.send("This is an Express App");
});


// Tell express to listen for requests (start server)
app.listen(3000, function() {
    console.log("Sever has started");
});