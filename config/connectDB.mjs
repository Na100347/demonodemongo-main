import mongoose from "mongoose";

export function connectDB() {
  mongoose
    .connect("mongodb+srv://na100347:6KHmJAmeXuJfy8bZ@cluster0.gvkec.mongodb.net/test")
    .then(() => console.log("Connected!"));
}
