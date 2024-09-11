<<<<<<< HEAD
const express=require('express')
const path=require("path")
const bodyPaser=require("body-parser")
const sessionMildleWare=require("./src/helperMildleWare/expressSession")
const connectDb=require("./src/DB/connectDb")
const getRoute = require('./src/route/getRoute')
const postRoute=require("./src/route/postRoute")
const app=express()
connectDb()
app.use(bodyPaser.urlencoded({extended:false}))
app.use(bodyPaser.json())
app.set("view engine", "ejs")
app.set("views",path.join(__dirname, "view"))
app.use(express.static(path.join(__dirname, "public")))
app.use("/bootstrap", express.static(path.join(__dirname,"node_modules/bootstrap/dist")))
app.use("/jquery",express.static(path.join(__dirname, "node_modules/jquery/dist")))
app.use(sessionMildleWare)
app.use(getRoute)
app.use(postRoute)
const PORT=4322||8080
app.listen(`${PORT}`,()=>{
    console.log(`http://localhost:${PORT}`);
})
=======
const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");
const sessionMiddleware = require("./src/helperMildware/session");
const connectDb = require("./src/db/connectDb");
const getpage = require("./src/route/getRoute");
const postRoute = require("./src/route/postRoute");

const app = express();
connectDb();

// Middleware to parse URL-encoded and JSON data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
app.use(express.static(path.join(__dirname, "public")));
app.use("/bootstrap", express.static(path.join(__dirname, "node_modules/bootstrap/dist")));
app.use("/jquery", express.static(path.join(__dirname, "node_modules/jquery/dist")));
app.use(sessionMiddleware);

// Route handlers
app.use(getpage);
app.use(postRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
>>>>>>> ef55d82 (committing workers connect  first time)
