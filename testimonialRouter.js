const express = require("express");
const router = express.Router();

let testimonials = [
  {
    img: "https://i.postimg.cc/MTGTqrsj/Godwin.jpg",
    text: "I have no hesiotancy writing a recommendation for Nande. He has a bright future in the industry",
    name: "Godwin Dzvapatsva",
    relationship: "Lecturer",
  },
  {
    img: "https://i.postimg.cc/mkXfgFCj/Whats-App-Image-2022-01-31-at-2-06-43-PM.jpg",
    text: "Nande is a very professional, hard-working individual and a talanted developer. He will be a success in the industry ",
    name: "Nomvuyiseko Mpofu",
    relationship: "Collegue",
  },
  {
    img: "https://i.postimg.cc/NMrqw3hM/emma.jpg",
    text: " I have known Nande as a collegue and a friend outside the workplace for long. He is a creative individual and very fun to work with.",
    name: "Emanuel Fente",
    relationship: "Collegue",
  },
  {
    img: "https://i.postimg.cc/7L8SV7xW/Whats-App-Image-2022-02-01-at-1-10-34-PM.jpg",
    text: "I've had the chance to know Nande and work with him over the past few months. He has a dedicated individual and has a great work ethic",
    name: "Kagiso Mphayi ",
    relationship: "Collegue",
  },
  {
    img: "https://i.postimg.cc/XJNyJ6cV/Siyanda1.jpg",
    text: "I have had the chance to work with Nande within a team and as an individual. He has a very positive work spirit and an eye for the prize",
    name: "Siyanda Ncamazana  ",
    relationship: "Collegue",
  },
  {
    img: "https://i.postimg.cc/L8HqvMwj/Azabenathi1.jpg",
    text: "Nande is very enthusiastic and is always willing to take on new challenges.",
    name: "Azabenathi Pupuma ",
    relationship: "Collegue",
  },
];

router.get("/", (req, res) => {
  res.send(testimonials);
});

module.exports = router;
