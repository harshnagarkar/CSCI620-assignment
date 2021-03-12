const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
// var corsOptions = {
//   // origin: "http://localhost:3000"
//   origin: "http://localhost:4200"
// };

var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: 'https://hnagarkar.us.auth0.com/.well-known/jwks.json'
}),
audience: 'https://localhost:3000/payinfo',
issuer: 'https://hnagarkar.us.auth0.com/',
algorithms: ['RS256']
});

app.use(jwtCheck);


var corsOptions = {
  origin: "http://localhost:4200"
};


app.use(cors(corsOptions));

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("", (req, res) => {
  res.json({ message: "Welcome to Payinfo CRUD." });
});

require("./app/routes/payinfo.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});