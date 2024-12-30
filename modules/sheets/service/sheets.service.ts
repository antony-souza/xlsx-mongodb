import xlsx from 'xlsx';
import { SheetsRepository } from "../repositories/sheets.repository";
import { IProduct } from 'modules/products/interfaces/interfaces';

export class SheetsService {
    constructor(private readonly sheetsRepository: SheetsRepository) {}

    generateBufferXlsx(data: any[]) {

        const convertJsonToXlsx = xlsx.utils.json_to_sheet(data);

        const createBook = xlsx.utils.book_new();

        xlsx.utils.book_append_sheet(createBook, convertJsonToXlsx, "Products");

        const bufferXlsx = xlsx.write(createBook, { type: 'buffer', bookType: 'xlsx' });

        return bufferXlsx;
    }

    async generateBufferXlsxProducts() {
        try {

            const products = await this.sheetsRepository.getAllProducts();

            const data = this.generateBufferXlsx(products);

            return data;

        } catch (error) {

            throw new Error('Erro ao gerar o arquivo XLSX: ' + error.message);
        }
    }
}
