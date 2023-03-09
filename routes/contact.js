//const path = require("path");
const express = require("express");

//const rootDir = require("../utils/path");
const contact = require("../controllers/contactus");
const success = require("../controllers/contactus");
const router = express.Router();

router.get("/contact", contact.contactController);

router.post("/success", success.successController);
module.exports = router;
