const express = require('express');
const path = require('path');
const hbs = require("hbs");

hbs.registerPartials(path.join(__dirname,"views","partials"));

var app = express();

app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname,"public")));

app.use((req, resp, next) => {
	resp.render("down", {
		now: new Date().toString()
	});
});

app.get('/', (req, resp) => {
	resp.render("home", {
		welcomeMessage: "Hello You",
		obj: {a:"a"},
		currentYear: new Date().getFullYear()
	});
});

app.get('/about', (req, resp) => {
	resp.render("about.hbs");
});

app.listen(3000, () => console.log("Starting on port 3000"));