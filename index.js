// initialize web server: "app"
const express = require("express");
const app = express();
// the port is essentially equivalent to the domain
const port = 8383;

// tell server to use public directory (great for assets like images or fonts)
app.use(express.static("public"));

// tell server to expect json
app.use(express.json())

let friends = {}

// CRON scheduler
function cron(ms, fn) {
    async function cb() { // callback function
        clearTimeout(timeout)
        fn()
        setTimeout(cb, ms)        
    }
    let timeout = setTimeout(cb, ms);
}

cron(2000, () => console.log(friends))

// routes
app.get("/malik", (req, res) => {
  res.status(200).send("hi from malik");
});

app.get("/malik/welcome", (req, res) => {
  // send back html
  res.status(200).send(`<h1 style="color: green">Welcome</h1>`);
});



app.get("/friends", (req, res) => {
  //handler
  res.status(200).send(friends);
});

app.post("/friends", (req, res) => {
    const { friend, adjective } = req.body
    console.log(friend)
    friends[friend] = adjective
    res.sendStatus(200)
});

// update info -> patch needs to be asynchronous
app.patch("/friends", async (req, res) => {
    const { friend, newAdjective } = req.body
    friends[friend] = newAdjective
    res.status(200).send(friends)    

});

app.put("/friends", (req, res) => {});

app.delete("/friends", (req, res) => {
    const { friend } = req.body
    delete friends[friend]
    res.status(200).send(friends) 
});



// start the server
app.listen(port, () => console.log(`Server has started on port: ${port}`));
