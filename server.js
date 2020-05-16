// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var app = express();
// var bodyParser = require('body-parser');

// Sets up the Express App
// =============================================================

var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// =============================================================

var maxReservations = 50;

var reservations = [
    {
        name: "Jordan",
        phone: "555-555-5555",
        party: 5,
        id: "Lord Jord"
    },
    {
        name: "Jon",
        phone: "555-555-5555",
        party: 10,
        id: "The Mighty Meidell"
    }
];

var waitlist = [
    {
        name: "Daniel Sochor",
        phone: 6309982436,
        party: 1.5,
        id: "Muscle Man Dan"
    }
];
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "book.html"));
});

app.get("/api/tables", function (req, res) {
    return res.json(reservations);
});

app.get("/api/waitlist", function (req, res) {
    return res.json(waitlist);
});

app.post("/api/tables", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newRes = req.body;
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html

    if (reservations.length <= 2) {
        reservations.push(newRes);
        res.json("Reserve");
    } else {
        waitlist.push(newRes);
        res.json("Waitlist");
    }
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
