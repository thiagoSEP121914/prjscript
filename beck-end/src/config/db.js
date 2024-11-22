import mysql from "mysql"; // Importando o módulo mysql

// Criar conexão
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "login",
});

// Conectar ao banco de dados
db.connect((err) => {
    if (err) {
        console.error("Erro ao conectar ao MySQL:", err);
        return;
    }
    console.log("Conexão ao MySQL bem-sucedida.");
});

// Exportar a conexão
export default db;
