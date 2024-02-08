import mongoose from "mongoose";
import { DB_NAME } from "../Constant.js";


export default async function connectDb(){
    try {
       const connection =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(connection.connection.host)

    } catch (error) {
        console.error("MongoDb Connection error: " + error)
    }
}