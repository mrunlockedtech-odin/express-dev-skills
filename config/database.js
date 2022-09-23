import mongoose from "mongoose";

mongoose.connect(process.env.DATABASE_URL)

//Mongoose connection short cut
const db = mongoose.connection

db.on('connected', function(){
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
})