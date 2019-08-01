//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/routing.js");
const app = express();
const PORT = process.env.PORT || 3001;


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use("/api/todo", router);

if (process.env.NODE_ENV === "production") {
  app.use(express.static('client/build'));

  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Server now running on port ${PORT}`));
