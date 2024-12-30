import { Request, Response } from "express";
import { ProductService } from "../service/product.service";

export default class ProductController {
    
    constructor(private readonly productService: ProductService) {}

    async createProduct(req: Request, res: Response) {
        try {
            const body = req.body;
            const newProduct = await this.productService.createProduct(body);
            return res.status(201).json(newProduct);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}
