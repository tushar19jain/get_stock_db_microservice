import express, { json } from "express";
import { STOCK_MODEL } from "./model/stock_model.js";
import { connectDB } from "./db/db_connect.js";
const GET_STOCK_DB = express();
GET_STOCK_DB.use(express.json());
const PORT = process.env.PORT;
GET_STOCK_DB.post("/get-stock-db", async (req, res) => {
  await connectDB();
  const { userID } = await req.body;
  console.log("User id", userID);
  const result = await STOCK_MODEL.find({ user_id: userID });
  console.log("User datagram", result);
  res.status(201).send(result);
});

GET_STOCK_DB.listen( PORT , "0.0.0.0" , ()=>{
  console.log("Service runnig");
});
