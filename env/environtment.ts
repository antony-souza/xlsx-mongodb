import * as dotenv from 'dotenv'
dotenv.config()

class Environtment {
  public readonly port:number =  parseInt(process.env.PORT) ?? undefined
  public readonly databaseUrl:string = process.env.DATABASE_URL ?? ''
}

export const environtment = new Environtment()