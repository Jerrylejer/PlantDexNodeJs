import { DataSource } from "typeorm";
import dotenv  from "dotenv";
import { Plant } from "./entities/Plant"; 

// J'indique où est mon fichier de référence pour les datas
dotenv.config({path:".env.local"});

// Je paramètre l'échange
const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: false,
    entities: [Plant],
    subscribers: [],
    migrations: [],
})
export default AppDataSource;