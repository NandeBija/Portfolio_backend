const express = require("express");
const cors = require("cors");
const app = express();
const projectsRouter = require("./projectsRouter"); //importing projects API //
const testimonialRouter = require("./testimonialRouter"); //importing testimonial API //
const contactRouter = require("./contactRouter"); //importing contact API //
const path = require("path");

app.use(cors());
app.use(express.json());
app.set("port", process.env.port || 3000);

app.get("/", (req, res, next) => {
  res.send({ msg: "Nande Bija's portfolio" });
});
app.use("/projects", projectsRouter); //use the project router API//
app.use("/testimonials", testimonialRouter); //use the testimonials router API//
app.use("/contact", contactRouter); //use the contact router API//

app.listen(app.get("port"), (server) => {
  console.info(`Server listen on port ${app.get("port")}`);
});
