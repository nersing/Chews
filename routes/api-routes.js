const router = require("express").Router();
// const db = require("../models");
const userController = require("../controllers/userController");
const biteController = require("../controllers/biteController");

module.exports = app => {
	console.log("Back end routes connected to server 3001");

	app.get("/test", (req, res) => res.json("pls work"));

	app.post("/test", (req, res) => {
		console.log("req.body:", req.body);
		res.json(req.body);
	});

	//POST - make a new user
	app.post("/api/user/create", (req, res) =>
		userController.createNewUser(req, res)
	);

	// GET - Get a user's info
	app.get("/api/user/:userId", (req, res) =>
		userController.getAllUserInfo(req, res)
	);

	//POST - make a new bite
	app.post("/api/user/:localId/bite/create", (req, res) =>
		biteController.createNewBite(req, res)
	);

	//GET - get bites from the db
	//Need to add within a specified date range
	app.get("/api/bites/search/city/:city", (req, res) =>
		biteController.searchForBites(req, res)
	);

	//PUT - update a bite to be "booked"
	app.patch("/api/user/:travelerId/bite/:biteId/book", (req, res) =>
		biteController.bookBite(req, res)
	);
};
