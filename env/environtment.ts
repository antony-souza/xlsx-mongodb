import * as dotenv from 'dotenv'
dotenv.config()

class Environtment {
  public readonly port:number =  Number(process.env.PORT) ?? ''
}

export const environtment = new Environtment()