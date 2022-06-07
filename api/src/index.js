import express from 'express';
import cors from 'cors';

console.log("Starting server - mode: " + process.env.NODE_ENV);

const app = express();
const PORT = 5000;
app.use(cors());



app.get("/api",(req,res)=>{
    res.send("API time is " + new Date())
})



app.use(express.static('src/public'));

app.listen(PORT, ()=>{
    console.log("Server running on: " + PORT);
});


