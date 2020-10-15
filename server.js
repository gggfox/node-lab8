const express = require("express");
const path = require("path");

let app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));

let reservations = [
  {
    name: "Gerardo",
    phone: "81184602",
    email: "a007@itesm.mx",
    uid: "01"
  }
]

let waitinglist = [
  {
    name: "Alex",
    phone: "022345234",
    email: "a654@itesm.mx",
    uid: "00"
  }
]

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./home.html"));
});

app.get("/reserve", (req, res) => {
  res.sendFile(path.join(__dirname, "./reserve.html"));
});

app.get("/tables", (req, res) => {
  res.sendFile(path.join(__dirname, "./tables.html"));
});

app.get("/api/tables", (req, res) => {
  return res.json(reservations);
});

app.get("/api/waitlist", (req, res) => {
  return res.json(waitinglist);
});


app.post("/api/tables", (req, res) => {
  let maxlen = 3
  let reserv = req.body;
  console.log(reserv)
  let len = reservations.length
  len < maxlen ? reservations.push(reserv) : waitinglist.push(reserv);
  res.json((len < maxlen ? true : false))
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});