import { Request, Response } from "express";
import { SheetsService } from "../service/sheets.service";

export class SheetsController {
    constructor(private readonly sheetsServices: SheetsService) { }

    async generateXlsxForProduct(req: Request, res: Response) {
        try {

            const buffer = await this.sheetsServices.generateBufferXlsxProducts();

            res.setHeader('Content-Disposition', 'attachment; filename=produtos.xlsx');
            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');

            return res.status(200).send(buffer);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}
