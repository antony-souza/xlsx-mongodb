import { CreateProductDTO, CreateProductDTOSchema } from "../dto/create-product-dto";
import { IProduct } from "../interfaces/interfaces";
import { ProductRepository } from "../repositories/product.repository";

export class ProductService {

    constructor(private readonly productRepository: ProductRepository) { }

    async createProduct(createProductDto: CreateProductDTO) {

        CreateProductDTOSchema.parse(createProductDto); 

        return await this.productRepository.createProduct(createProductDto);
    }
}