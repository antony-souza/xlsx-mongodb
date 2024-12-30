import { z } from 'zod';
import { ICreateProductDTO } from '../interfaces/interfaces';

export const CreateProductDTOSchema = z.object({
    name: z.string().nonempty("Name is required"),
    price: z.number().min(0, "Price must be at least 0"),
    stock: z.number().min(1, "Stock must be at least 1"),
    description: z.string().nonempty("Description is required")
});

export type CreateProductDTO = ICreateProductDTO & z.infer<typeof CreateProductDTOSchema>;