const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRouter = require('./routes/auth/auth-route')


//create a database connection -> u can also
//create a separate file for this and then import/use that file here


mongoose
  .connect('mongodb+srv://Abhisheek88:Dell123@abhisheek88.7hlfr.mongodb.net/')
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log("MongoDB is Not connected"));
 

  const app =express();
  const PORT = process.env.PORT || 5000;

  app.use(
    cors({
      origin: "http://localhost:5173",
      methods: ["GET", "POST", "DELETE", "PUT"],
      allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma",
      ],
      credentials: true,
    })
  );



   
  app.use(cookieParser)
  app.use(express.json)
  app.use('/api/auth', authRouter)



  


  app.listen(PORT, ()=> console.log(`Server is now running on port ${PORT}`) );

 

