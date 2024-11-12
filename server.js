const express = require(`express`);
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("You've reached the Playlist API!");
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}.`)
});

const playlist = require("./playlist");

app.get("/playlist", (req, res) => {
  res.json(playlist);
});

app.get("/playlist/:index", (req, res) => {
  const { index } = req.params;
  if (index < 0 || index >= playlist.length){
    res.status(404).send("That song does not exu=ist in the playlist.");
  } else {
    res.json(playlist[index]);
  }
});