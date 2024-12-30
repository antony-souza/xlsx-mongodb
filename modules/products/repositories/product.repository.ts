import { Product } from "../schema/product.schema";
import { IProduct } from "../interfaces/interfaces";

export class ProductRepository {
    async createProduct(product: IProduct):Promise<IProduct> {
        const newProduct = await Product.create(product)

        if(!newProduct) {
            throw new Error('Error creating product');
        }

        return newProduct;
    }

    async getAllProducts(): Promise<IProduct[]> {
        const products = await Product.find().lean().select('-__v');

        return products;
    }
}