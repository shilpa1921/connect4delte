const express = require("express");
const app = express();
const hb = require("express-handlebars");
const project = require("./projects.json");

app.engine("handlebars", hb());
app.set("view engine", "handlebars");

app.use(express.static("./projects"));
app.use(express.static("./public"));

app.get("/", (req, res) => {
    res.render("welcome", {
        layout: "main",
        project,
    });
});

app.get("/:project/description", (req, res) => {
    const project1 = req.params.project;

    const selectedProject = project.find((item) => item.directory == project1);
    console.log("selectedProject", selectedProject);

    if (!selectedProject) {
        return res.sendStatus(404);
    }

    res.render("description", {
        layout: "main",
        selectedProject: selectedProject,
        project,
    });
});

app.listen(8080, () => console.log("Server Listening!"));
