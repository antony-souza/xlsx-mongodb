import { ProductService } from "modules/products/service/product.service";

export class SheetsRepository {
    constructor(private readonly productServices: ProductService) {}

    async getAllProducts() {
        return await this.productServices.getAllProducts();
    }

}