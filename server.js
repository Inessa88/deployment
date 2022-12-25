// import jwt from 'jsonwebtoken';

// const token = jwt.sign({name:'John', email:'jjj@gmail.com', id:123}, 'amante_mentale1988', {expiresIn:'60s'}); //creating our token, first parament is a payload


// console.log(token);

// //to verify token, pay attention to a secret code

// jwt.verify(token, 'amante_mentale1988', (err,decode)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(decode.name, decode.email); //to decode my payload
//     console.log('valid');
// })
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './config/dbElephantSql.js';
import router from './routes/Users.js'



dotenv.config();
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(router);





app.listen(process.env.PORT||8080, ()=>{
    console.log(`run on ${process.env.PORT||8080}`);
})



try{
    await db.authenticate();
    console.log('Database connected');
}
catch(e){
    console.log(e);
}

// app.get('/users', )