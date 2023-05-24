const express = require("express");

//The router object is created using express.Router().
// This object is responsible for defining routes for the contacts endpoint.
const router = express.Router();
const {
  getContacts,
  getContact,
  updateContact,
  deleteContact,
  createContact,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

// The route is set to handle GET requests using the .get() method.
// When a GET request is made to the contacts endpoint ("/"), the provided callback function is executed.

router.use(validateToken);
// The above will protect all the below routes

router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
