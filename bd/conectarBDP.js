class ConectarBDP {
    constructor() {
        this.conexionP = null;
        this.mysql = require("mysql2/promise");
    }

    async conectarMySqlP() {
        try {
            this.conexionP = await this.mysql.createConnection({
                host:process.env.HOST,
                user:process.env.USER,
                password:process.env.PASSWORD,
                database:process.env.DATABASE,
                port:process.env.PORTMYSQL
            });
            console.log("Conectado a MySql");
            return this.conexionP;
        } catch (error) {
            console.error("Error al conectar con MySql: " + error);
        }
    }

    async cerrarConexionP() {
        if (this.conexionP != null) {
            try {
                await this.conexionP.end();
                console.log("Conexión de MySql cerrada");
            } catch (error) {
                console.error("Error al desconectar de MySql: " + error);
            }
        }
    }
}

module.exports = ConectarBDP;
