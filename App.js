const mongoose = require("mongoose");

const express = require("express");
const serverless = require("serverless-http");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./config/db.js");
const cors = require("cors");


const navRouter =require ("./router/navroutes.js")
const heroRouter = require("./router/heroroutes.js"); 
const stateRouter = require("./router/stateroutes.js");

const featuresRouter = require("./router/featuresroutes.js");

const deviceRouter = require("./router/deviceroutes.js");

const comunicationRouter = require("./router/comunicationroutes.js");

const sapworkRouter = require("./router/sapworkroutes.js")

const interfaceRouter = require("./router/interfaceroutes.js")

const reviewsRouter = require("./router/reviewsroutes.js");

const pricingRouter = require("./router/pricingroutes.js")

const teamRouter = require("./router/teamroutes.js");

const availableRouter = require("./router/availableroutes.js");

const   contectusRouter = require("./router/contectusroutes.js");

const footerRouter = require("./router/footerroutes.js");
const user = require("./router/userouter.js");



const app = express();



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));




// nav api
connectDB();
app.use('/api', navRouter)

// hero api
app.use('/api', heroRouter);

// // state api
app.use("/api", stateRouter);

// //features k liya 
app.use("/api", featuresRouter);

// device k liya 
app.use("/api", deviceRouter);

//comunication api 
app.use("/api", comunicationRouter);

//sapwork api
app.use("/api", sapworkRouter);

//interface api 
app.use("/api", interfaceRouter)

//reviews api
app.use("/api", reviewsRouter)

//pricing api
app.use("/api", pricingRouter)

//team api
app.use("/api", teamRouter)

//available section api
app.use("/api", availableRouter)

//contect api
app.use("/api", contectusRouter)

//footer api
app.use("/api", footerRouter)


//user ki api
app.use("/api", user)

// health check
app.get("/", (req, res) => res.send("API is running"));

// Export for Vercel serverless
module.exports = app;
module.exports.handler = serverless(app);

// For local development only
if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`App running on port ${port}`);
  });
}