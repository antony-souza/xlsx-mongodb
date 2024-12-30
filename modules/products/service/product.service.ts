import { CreateProductDTO } from "../dto/create-product-dto";
import { ProductRepository } from "../repositories/product.repository";

export class ProductService {

    constructor(private readonly productRepository: ProductRepository) { }

    async createProduct(createProductDto: CreateProductDTO) {

        return await this.productRepository.createProduct(createProductDto);
    }

    async getAllProducts() {
        return await this.productRepository.getAllProducts();
    }
}