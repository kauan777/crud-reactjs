import express from 'express';
import db from './config/database.js';
import userRouter from './routes/index.js';
import authRouter from './routes/auth.js';
import cors from 'cors';
import bodyParser from 'body-parser';

try{
    await db.authenticate()
    console.log("Database connected...");
}catch (err){
    console.error("Conection error:",err)
}

const app  =  express()

app.get('/', (req, res) =>{
    res.send('Welcome');
});

app.use(cors());

app.use(bodyParser.json());
app.use('/users', userRouter);
app.use('/auth', authRouter);

app.listen(5000, () => console.log("Server running at port 5000"));