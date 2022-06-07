import express from 'express';

console.log("Starting server");

const app = express();
const PORT = 3000;

app.get("/api",(req,res)=>{
    res.send("API")
})
app.use(express.static('src/public'));

app.listen(PORT, ()=>{
    console.log("Server running on: " + PORT);
});


