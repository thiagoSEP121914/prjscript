import db from "../config/db.js"; 

export const getLogin = (req, res) => {
    const { email, senha } = req.body; // Obtém email e senha do corpo da solicitação

    // Consulta SQL para verificar as credenciais
    const q = "SELECT * FROM login WHERE email = ? AND senha = ?";

    // Executa a consulta
    db.query(q, [email, senha], (err, data) => {
        if (err) {
            return res.status(500).json({ message: "Erro ao consultar essa merda de banco dados", err });
        }

        if (data.length > 0) {
            return res.status(200).json({ message: "Login bem-sucedido", user: data[0] });
        } else {
            return res.status(401).json({ message: "Credenciais  invalidas" }); // Retorna erro se não encontrar
        }
    });
};


export const addLogin = (req, res) => {
    console.log("Dados recebidos para cadastro:", req.body); // Para depuração

    // Verifique se os campos necessários estão presentes
    const { nome, email, password } = req.body;

    if (!nome || !email || !password) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios." });
    }

    const q = "INSERT INTO login (`nome`, `email`, `senha`) VALUES (?)";
    const values = [nome, email, password];

    db.query(q, [values], (err, data) => {
        if (err) {
            console.error("Erro ao executar a query:", err); // Para depuração
            return res.status(500).json({ message: "Erro ao cadastrar", err });
        }
        console.log("Cadastro realizado com sucesso:", data);
        return res.status(201).json({ message: "Cadastro realizado com sucesso!" });
    });
};



export const updateLogin = (req, res) => {
    const q = "UPDATE login SET `senha` = ? WHERE `codigo` = ?";
    const values = [req.body.senha, req.body.nome];
    
    db.query(q, [...values, req.params.codigo], (err) => {
        if (err) return res.json(err);
        return res.status(200).json("Registro atualizado com sucesso");
    });
};

export const deleteLogin = (req, res) => {
    const q = "DELETE FROM login WHERE `codigo` = ?";
    db.query(q, [req.params.codigo], (err) => {
        if (err) return res.json(err);
        return res.status(200).json("Registro deletado com sucesso");
    });
};
