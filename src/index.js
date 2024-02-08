import { app } from "./app.js";
import connectDb from "./db/db.js";
// import 'dotenv/config';

const port = process.env.PORT || 5000;

connectDb()
.then(()=>(
    app.listen(port,()=>{
        console.log("App is successfully connected on Port " + port)
    })
))
.catch((err)=>console.error(err))