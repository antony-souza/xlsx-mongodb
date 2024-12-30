import express from 'express';
import cors from 'cors' 
import { environtment } from './env/environtment';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(environtment.port, () => {
    console.log(`Server is running on port: ${environtment.port}`);
})