import { Router } from 'express';
import ProductController from "../controller/product.controller";
import { ProductRepository } from "../repositories/product.repository";
import { ProductService } from "../service/product.service";

const router = Router();

const productRepository = new ProductRepository();
const productService = new ProductService(productRepository);
const productController = new ProductController(productService);

router.post('/products/create', (req, res) => {
    productController.createProduct(req, res);
});

export default router;
