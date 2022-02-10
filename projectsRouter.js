const express = require("express");
const router = express.Router();

let projects = [
  {
    id: 1,
    title: "BMI calculator",
    github: "https://github.com/NandeBija/BMI.git",
    live: "https://vigorous-austin-12a137.netlify.app/",
    description: "|Calculate your Body Mass Index ",
    img: "https://i.postimg.cc/7LmrVPqp/BMI.png",
    techStacks: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "Point of Sale",
    github: "https://github.com/NandeBija/Glasses-ecommerce.git",
    live: "https://elastic-saha-6c5e72.netlify.app/",
    description: "|Sunglasses ecommerce store",
    img: "https://i.postimg.cc/SRzWdsbd/ecommerce.png",
    techStacks: ["HTML", "CSS", "JavaScript", "Vue JS"],
  },
  {
    id: 3,
    title: "Maths calculator",
    github: "https://github.com/NandeBija/calculator.git",
    live: "https://distracted-varahamihira-8bbd1d.netlify.app/",
    description: "Description:|Perform mathematical calculations",
    img: "https://i.postimg.cc/GhmBbt55/calculator.png",
    techStacks: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 4,
    title: "Speed reactor game",
    github: "https://github.com/NandeBija/ReactionTImer_game.git",
    live: "https://silly-kare-81e9a0.netlify.app/",
    description: "|Reaction timer game to test your reflexes",
    img: "https://i.postimg.cc/DzzM7rKM/reactor.png",
    techStacks: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 4,
    title: "Cards projects",
    github: "https://github.com/NandeBija/Prac3_Cardss.git",
    live: "https://dreamy-bassi-bf5eb4.netlify.app/",
    description: "Description:|Card display",
    img: "https://i.postimg.cc/fT3p9jtn/cards2.png",
    techStacks: ["HTML", "CSS"],
  },
  {
    id: 5,
    title: "CRUD operations ",
    github: "https://github.com/NandeBija/CRUD-exersice.git",
    live: "https://dreamy-bassi-bf5eb4.netlify.app/",
    description: "Description:|Create, Read, Update, and Delete",
    img: "https://i.postimg.cc/kGxLZ7xN/CRUD.png",
    techStacks: ["HTML", "CSS"],
  },
];
function fixArrayId(arr) {
  {
    return array.forEach((item, index) => (item.id = index + 1));
  }
}

//CREATE To add a new project... you dont have to go and push when you add a new project to the array
router.post("./", (req, res) => {
  const { title, github, live, description, img, techStacks } = req.body; //to get information out of the body //
  if (!title || !github || !live || description || !img || !techStacks) {
    res.status(400).send({ msg: "Not all data sent" });
  }
  const project = {
    id: projects.length + 1,
    title,
    github,
    live,
    description,
    img,
    techStacks,
  };
  projects.push(project);
  res.send(project);
});

//READ
router.get("/", (req, res) => {
  res.send(projects);
});
router.get("./:id", (req, res) => {
  // Used to get something with a specific ID //
  const project = projects.find((project) => project.d == req.params.id);
  if (!project) res.status(404).send({ msg: "project not found" });
  res.send(project);
});

//UPDATE
router.put("./", (req, res) => {
  const { title, github, live, description, img, techStacks } = req.body;
  const project = projects.find((project) => project.id == req.params.id);
  if (!project) res.status(404).send({ msg: "project not found" });

  if (title) project.title = title;
  if (github) project.github = github;
  if (live) project.live = live;
  if (description) project.description = description;
  if (img) project.img = img;
  if (techStacks) project.techStacks = techStacks;

  res.send(project);
});

//DELETE used to delete an existing projects
router.delete("./", (req, res) => {
  projects = projects.filter((project) => project.id != req.params.id);
  fixArrayId(projects);
  res.send({ ms: "Project deleted" });
});

module.exports = router;
