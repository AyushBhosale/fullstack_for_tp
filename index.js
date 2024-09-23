import express from 'express';
import cors from 'cors'
// const cors=require('cors')
const app = express();
app.use(cors({
    origin:'http://localhost:5173'
}));
app.get('/',(req,res)=>{
    res.send('Server is Ready')
});
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
let x = getRandomInt(4)
app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title:'A Joke',
            content:'This is a joke'
        },
        {
            id:2,
            title:'2 Joke',
            content:'This is a 2-joke'
        },
        {
            id:3,
            title:'3 Joke',
            content:'This is a 3-joke'
        },
        {
            id:4,
            title:'4 Joke',
            content:'This is a 4-joke'
        }
    ]
    res.send(jokes[x].content);
})

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`);
})