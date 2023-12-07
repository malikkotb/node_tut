// initialize web server: "app" 
const express = require('express')
const app = express()
// the port is essentially equivalent to the domain
const port = 8383

// routes
app.get('/', (req, res) => {
    // handler    (res is the server response)
    
    // we can chain responses: 
    res.status(200).send({message: "hi all good"});

    // res.sendStatus(200);
    // 200 - 299 successfull
    // 300 uncommon
    // 400 failure on your request (auth issue, wrong route, or can't find anything)
    // 500 error has occurred on the server and response couldn't be sent in the first place 
    
    // res.send({message: "hello node"}) 
    
    // res.json({message: "hello world"}) // or to be more explicit, specify that we're sending json

})

app.get('/malik', (req, res) => {
    res.status(200).send({message: "hi malik"})
})

app.listen(port, () => console.log(`Server has started on port: ${port}`))