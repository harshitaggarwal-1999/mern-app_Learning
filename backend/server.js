const express = require("express")
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config();
const userRoute = require("./routes/userRoute");
app.use(express.json())

mongoose
    .connect(process.env.URI)
    .then(() => {
        console.log("Mongo database Connected successfully")
        app.listen(process.env.PORT || 8000, (err) => {
            if (err) console.log(err);
            console.log("running successfully at", process.env.PORT);
        });
    }).catch((error) => {
        console.error("error", error)
    });

app.use("/api/user",userRoute)


