

const express = require("express");


//Binding the express modile to this app variable.
const app = express();


app.get("/", function(req, res) {
  //console.log(req)
  console.log(res)
  res.send("Hello Mayank!")
})

app.get("/contact", function(req, res) {
  console.log(req)
  // console.log(res)
  res.send("Contact me at : mayank.verma12389@gmail.com")
})


app.get("/about", function(req, res) {
  console.log(req)
  // console.log(res)
  res.send("My Name is Mayank, I love to learn new things and focus bit on my health.")
})

//Listen on a specific port. - Barebone of express server
app.listen(3000, function() {
  console.log("Server started on port 3000")
});
