import xlsx from "xlsx";

export class XlsxService {
    generateBufferXlsx(data: any[]) {

        const convertJsonToXlsx = xlsx.utils.json_to_sheet(data);

        const createBook = xlsx.utils.book_new();

        xlsx.utils.book_append_sheet(createBook, convertJsonToXlsx, "Products");

        const bufferXlsx = xlsx.write(createBook, { type: 'buffer', bookType: 'xlsx' });

        return bufferXlsx;
    }
}

