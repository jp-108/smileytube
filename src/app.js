import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import temp from "../public/temp/temp.js";
import path from "path"

// const publicFolderPath = path.resolve('./public');

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

app.use(express.json())
app.use(express.urlencoded({extended: true, limit:"20kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//import routes
import userRoutes from "./routes/user.routes.js";

// routes config
app.use("/api/v1/users", userRoutes);

export {app};


