const express = require('express');
const path = require('path');
const hbs = require("hbs");

const port = process.env.PORT || 3000;
const app = express();

hbs.registerPartials(path.join(__dirname,"views","partials"));
hbs.registerHelper('currentYear', () => new Date().getFullYear());

app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname,"public")));

app.get('/', (req, resp) => {
	resp.render("home", {
		welcomeMessage: "Welcome HOME!"
	});
});

app.get('/about', (req, resp) => {
	resp.render("about.hbs");
});

app.get('/projects', (req, resp) => {
	resp.render("projects.hbs");
});


app.listen(port, () => console.log("Starting on port", port));