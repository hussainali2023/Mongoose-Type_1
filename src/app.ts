import express, { Application } from 'express';
import cors from 'cors';


const app: Application = express()

// application route 
import userRoute from './app/modules/user/user.route'

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// app.get('/api/v1/user', userRoute)
app.use("/api/v1/user", userRoute)
export default app;

    //inserting a test data in mongodb
/*
1.Interface
2.Schema
3.Model
4.Database Query
*/

// creating an Interface

//creating schema


