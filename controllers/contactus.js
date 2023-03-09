const path = require("path");
const rootDir = require("../utils/path");
exports.contactController = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contact.html"));
};

exports.successController = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "success.html"));
};
