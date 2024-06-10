import express from 'express';

const PORT = 3001;
const app = express();

app.use(express.json());


app.get('/', (req,res) => {
    try {
        res.status(200).json({message: "You Successfully setup project"});
    } catch (error) {
        res.status(500).json({message: `Internal server error: ${error}`});
    }
})

app.listen(PORT, ()  => {
    try {
        console.log(`Server has satrted on Port: ${PORT}`)
    } catch (error) {
        console.log(`Error Occured while starting Server: ${error}`)
    }
})