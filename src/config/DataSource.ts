import { DataSource } from "typeorm";
import Pet from "../entities/Pet";

export const AppDataSource = new DataSource({
    type: "mssql",
    host: "localhost",
    port: 1433,
    username: "sa",
    password: "Mfellipe11",
    database: "AdoPetDB",
    synchronize: true,
    options: {
        encrypt: false, 
        trustServerCertificate: true 
    }
});