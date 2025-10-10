const mongoose = required("mongoose");

const express = required("express");
const serverless = required("serverless-http");
const dotenv = required("dotenv");
dotenv.config();

const connectDB = required("./config/db.js");
const cors = required("cors");


const navRouter =required ("./router/navroutes.js")
const heroRouter = required("./router/heroroutes.js"); 
const stateRouter = required("./router/stateroutes.js");

const featuresRouter = required("./router/featuresroutes.js");

const deviceRouter = required("./router/deviceroutes.js");

const comunicationRouter = required("./router/comunicationroutes.js");

const sapworkRouter = required("./router/sapworkroutes.js")

const interfaceRouter = required("./router/interfaceroutes.js")

const reviewsRouter = required("./router/reviewsroutes.js");

const pricingRouter = required("./router/pricingroutes.js")

const teamRouter = required("./router/teamroutes.js");

const availableRouter = required("./router/availableroutes.js");

const   contectusRouter = required("./router/contectusroutes.js");

const footerRouter = required("./router/footerroutes.js");
const user = required("./router/userouter.js");



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
