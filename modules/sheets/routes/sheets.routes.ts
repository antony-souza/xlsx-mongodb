import { Router } from "express";
import { SheetsController } from "../controller/sheets.controller";
import { ProductService } from "modules/products/service/product.service";
import { SheetsService } from "../service/sheets.service";
import { SheetsRepository } from "../repositories/sheets.repository";
import { ProductRepository } from "modules/products/repositories/product.repository";

const router = Router();

const productRepository = new ProductRepository();
const productService = new ProductService(productRepository);
const sheetsRepository = new SheetsRepository(productService);
const sheetsService = new SheetsService(sheetsRepository);
const sheetsController = new SheetsController(sheetsService);

router.get('/sheets/generate-xlsx', (req, res) => {
    sheetsController.generateXlsxForProduct(req, res);
})

export const sheetsRouter = router;