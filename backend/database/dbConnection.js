import mongoose from "mongoose";

const dbConnection = () =>{
mongoose.connect(process.env.MONGO_URI, {
    dbName: "Path-Finder",
}).then(()=>{
    console.log("Connected to database ! ");
}).catch((err)=>{
    console.log(`Some error occured while connecing to database: ${err}`);
});
};

export default dbConnection;