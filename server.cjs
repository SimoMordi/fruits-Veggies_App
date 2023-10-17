const express = require('express') 
const path = require('path') 
const cors = require('cors')
const morgan = require('morgan')
const PORT = 4000;
const app = express();


// const middleware = (req, res, next) => {
//     console.log("doing stuff");
//     next();
// }

app.use(cors({
    origin: "*"
}))

app.use(morgan('dev'))

// app.use(middleware);

app.use(express.json()); // adds .body to the request
const fruits = [];

app.get('/fruits',(req, res)=>{
    res.send(fruits)
});
app.post('/fruits',(req, res)=>{
    console.log(req.body);
    fruits.push(req.body)
    res.send("Route is good")
});

app.get("/", (req, res) => {
    res.send("here is your valuable data")
    
});



app.get("/name", (req, res) => {
    res.send("Our Name is Dynamic Solutions")
});

app.listen(PORT, () => {
    console.log(`Listening on port  http://localhost:${PORT} `)
});
