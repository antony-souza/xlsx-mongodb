import express, { Router } from 'express';
import cors from 'cors' 
import { environtment } from './env/environtment';
import { logger } from 'io-logger';
import connectDB from 'config/mongo.conf';
import { sheetsRouter } from 'modules/sheets/routes/sheets.routes';
import { productRouter } from 'modules/products/routes/product.routes';

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(productRouter, sheetsRouter)

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(environtment.port, () => {
    logger.debug(`Server is running on port: ${environtment.port}`);
})