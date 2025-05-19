const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/user');



const app = express();
const port = process.env.PORT || 9000;

//midelware
app.use(express.json());
app.use("/api", userRoutes)


//first TEST
app.get("/", (req, res) => {
    res.send("Hello world node.mongodb.JSC")
});



//mongo db connection
//NEVER FORGET TO ADD DB NAME TO YOUR LINK xd. 
mongoose
    .connect(process.env.MONGOOSE_URI)
    .then(() => console.log("connected to mongodb Atlas"))
    .catch((error) => console.error(error));



app.listen(port, () => console.log('Server listening on port', port));

