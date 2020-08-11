const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const compression = require("compression");
// path is a native module

// load dotenv in our process, enable process env to get access to the secret key from stripe
if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// express is just a library that allows us to build an API server easily
const app = express();
const port = process.env.PORT || 5000;

app.use(compression());
app.use(bodyParser.json());
// 类似fetch回的数据总要经过.json来处理，在此做一个统一预处理的效果
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}
// express.static: middleware function
// __dirname is part of Node.js
// keep all static files in build file inside of client folder

app.listen(port, (error) => {
  if (error) throw error;
  console.log(`Server running on port ${port}`);
});

// /payment is router's name that we want to hit
app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});
