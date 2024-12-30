import { environtment } from 'env/environtment';
import { logger } from 'io-logger';
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(environtment.databaseUrl);
    logger.info(`MongoDB conectado em: ${connect.connection.name}`);
    
  } catch (error) {
    logger.error(`Erro ao conectar com o MongoDB: ${error.message}`);
  }
};

export default connectDB;
