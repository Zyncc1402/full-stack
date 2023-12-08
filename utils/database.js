import mongoose from "mongoose";

export const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "nextDB",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("MongoDB Connected")
    } catch (error) {
        console.log(error)
    }
}