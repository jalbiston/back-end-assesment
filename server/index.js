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


const controller = require('./controller.js')

app.get("/api/famouscougs", controller.getCoug)
app.post("/api/famouscougs", controller.addCoug)

app.listen(3000, () => console.log("Server running on 3000"));
