import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { IProduct } from "../interfaces/interfaces";

const productSchema = new mongoose.Schema({
    _id: { type: String, required: false, default: uuidv4 },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    description: { type: String, required: true },
});

export const Product = mongoose.model<IProduct>("ProductTest", productSchema);