import express from "express";
import {
    getLogin,
    addLogin,
    updateLogin,
    deleteLogin
} from "../controllers/login.js"; // Certifique-se de que o caminho esteja correto

const router = express.Router();

// Define as rotas
router.post("/loginForm", getLogin); // Para obter o login
router.post("/cadastro", addLogin); // Para adicionar um novo login
router.put("/:codigo", updateLogin); // Para atualizar um login existente
router.delete("/:codigo", deleteLogin); // Para deletar um login existente

export default router; // Exportando as rotas
