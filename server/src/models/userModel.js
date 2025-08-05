import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(e => console.error("Error connecting to DB", e));

const userData = new mongoose.Schema({
    username: String,
    email: { type: String, unique: true },
    password: String,
},
    // { timestamps: true }
);

const User = mongoose.model('User', userData);

export default User;
