var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [
    {
        name: "John Niceguy",
        phone: 7829979842,
        partysize: 3,
        uniqueID: "John"
    },
    {
        name: "Blake Badguy",
        phone: 8987934392,
        partysize: 5,
        uniqueID: "Mr. Badguy"
    }
];

var waitlist = [
    {
        name: "Daniel Sochor",
        phone: 6309982436,
        partysize: 2,
        uniqueID: "Muscle Man Dan"
    }
];

var maxReservations
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"));
  });
  
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "book.html"));
  });

  app.get("/api/tables", function(req, res) {
    return res.json(reservations);
  });
  
  app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
  });

  app.post("/api/tables", function(req, res) {
    
    var newRes = req.body;
  
    console.log(newRes);
    if(reservations.length <= 4){
        reservations.push(newRes);
        res.json("Reserve");
    } else {   
        waitlist.push(newRes);
        res.json("Waitlist");
    }
  });
  



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });