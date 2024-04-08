import express from "express";
import mongoose from "mongoose";
import routes from "./routes/route.mjs";

const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://ayushshivrai098:HybKUvYf7bj77Apc@cluster0.pw5xdm9.mongodb.net/Books"
).then(()=>console.log("Connected to Database")).catch((e)=>{console.log("Error connecting :",e)});

app.use("/",routes);

app.listen(8000,()=> console.log("Successfully started on port ",8000));