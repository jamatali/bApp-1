import 'dotenv/config';
import express from 'express';
import { dbConnect } from './db/config.js';
import dbSync from './db/init.js';
import AllRoutes from './router/index.js';


const PORT = 3001;
const app = express();
app.use(express.json());

app.use(AllRoutes);


dbConnect();
dbSync();

app.listen(PORT, ()  => {
    try {
        console.log(`Server has satrted on Port: ${PORT}`)
    } catch (error) {
        console.log(`Error Occured while starting Server: ${error}`)
    }
})