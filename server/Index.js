import express from'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';
import userRouter from './routes/users.js';


const app=express();
dotenv.config();




app.use(bodyParser.json({limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));
app.use(cors());
app.use('/posts',postRoutes);
app.use("/users",userRouter);
//const CONNECTION_URL='mongodb+srv://codingsquad:Project123@cluster0.jfujl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
//mongodb+srv://AimanKashaf:aimankashaf123@cluster0.uzl8d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const PORT=process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true})
 .then(()=>app.listen(PORT,()=>console.log(`Server running on port: ${PORT}`)))
 .catch((error)=>console.log(error.message));

 //mongoose.set('useFindAndModify',false);

 /*import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);

const CONNECTION_URL = 'mongodb+srv://js_mastery:M6WfDnJEoj9HkV2d@practice.jto9p.mongodb.net/memories_app?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);*/