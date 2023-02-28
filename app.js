const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("I am in Middle");
  next();
});
app.use((req, res, next) => {
  console.log("I am in  another Middle");
  res.send("<h1>Hello Express</h1>");
});

// const server = http.createServer(app);

// server.listen(4000);

app.listen(4000);
