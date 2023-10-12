const morgan = require("morgan");

const express = require("express");
const players = require("./routes/players");
// first update

const app = express();

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
}

app.use("/players", players);

port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`The API is listening on ... ${port}`);
});
