import mongoose from "mongoose";
import Database_Name from "../constant.js";
 const database = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${Database_Name}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("mongodb connection failed",error)
        process.exit(1)
    }
}

export default database;