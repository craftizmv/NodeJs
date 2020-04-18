const express = require("express");

const app = express();


app.get("/", function(req, res) {
  //console.log(req)
  console.log(res)
  res.send("Hello Mayank!")
})

app.get("/contact", function(req, res) {
  //console.log(req)
  console.log(res)
  res.send("Contact me at : mayank.verma12389@gmail.com")
})

app.listen(3000, function() {
  console.log("Server started on port 3000")
});
