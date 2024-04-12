# Library-Book-Manegement_System
mkdir express-mongoose-example
cd express-mongoose-example
npm init -y
npm install express mongoose
mkdir routes
touch routes/route.mjs
// index.mjs
import express from "express";
import mongoose from "mongoose";
import routes from "./routes/route.mjs";

const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://<username>:<password>@cluster0.pw5xdm9.mongodb.net/Books"
).then(()=>console.log("Connected to Database")).catch((e)=>{console.log("Error connecting :",e)});

app.use("/",routes);

app.listen(8000,()=> console.log("Successfully started on port ",8000));
# Express.js Application with MongoDB Example

This is a simple example of an Express.js application connected to a MongoDB database using Mongoose.

## Prerequisites

- Node.js installed on your machine.
- MongoDB Atlas account (or any MongoDB instance you prefer).

## Getting Started

1. Clone this repository or create the files as described below.

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up MongoDB:
    - Create a MongoDB Atlas account.
    - Replace `<username>` and `<password>` in the MongoDB connection URL in `index.mjs` with your Atlas username and password.

4. Run the application:
    ```bash
    npm start
    ```

5. Visit `http://localhost:8000` in your browser to see the application running.

## Folder Structure


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
npm start
