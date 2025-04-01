// import
import express from 'express'




// Create a new express application instance
const app = express();
const port = 1369;


// create a route
app.get('/', (req, res)=>{
    res.send('Hello World');
})



// listen to the server
app.listen(port, ()=>{
    console.log(`server is running on port http://localhost:${port}`);
})

