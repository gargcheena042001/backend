import dotenv from "dotenv"
import database from "./database/index.js";
dotenv.config({
    path:'./env'
})
database()
.then(()=>{
    app.listen(process.env.PORT||5000,()=>{
        console.log(`server is running at port ${process.env.PORT}`)
    })
}) 
.catch((error)=>{
 console.log("mongodb connection failed",error);
})













// require('dotenv').config({path:'./env'})
// import mongoose from "mongoose";
// import Database_Name from "./constant.js"
// import express from express;
// const app=express()
// (async()=>{
//     try {
//           await mongoose.connect(`${process.env.MONGODB_URL}/${Database_Name}`)
//           app.on("error",(error)=>{
//             console.log("not connect with database",error)
//             throw error
//           })
//            app.listen(process.env.PORT,()=>{
//             console.log(`app is listening on this ${process.env.PORT}`)
//            })

//     } catch (error) {
//         console.log(error)
//         throw error;
//     }
// })()




