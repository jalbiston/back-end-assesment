const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = [ "You will go on a nice vacation soon",
                     "You will have a lucrative job",
                     "You will find success in your field",
                     "You will pass your test",
                     "You will find happiness in life"
  ];
                     
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune)
  
});

app.get("/api/users", (req, res) => {
  let friends = ["Fart Face", "Ugly", "Vomity", "Gah I hope this works", "Probably Wont", "I am trying real hard", "#coderlife"];
  res.status(200).send(friends);
});

const pokeController = require('./controller.js')

app.get('/api/pokemon/', pokeController.getPokemon);
app.post('/api/pokemon/', pokeController.createPokemon);
app.delete('/api/pokemon/:id', pokeController.deletePokemon);




app.listen(4000, () => console.log("Server running on 4000"));
