export interface IProduct {
    name: string;
    price: number;
    stock: number;
    description: string;
}

export interface ICreateProductDTO {
    name: string;
    price: number;
    stock: number;
    description: string;
}