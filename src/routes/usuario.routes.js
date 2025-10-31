import {
criaUsuario,
listaUsuario,
obterUsuario,
atulisaUsuario,
deletarUsuario
} from "../controller/usuarios.controller.js";

import express from "express";

const router = express.Router();

router.get("/", listaUsuario);
router.post("/", criaUsuario);
router.get("/", obterUsuario);
router.put("/", atulisaUsuario);
router.delete("/", deletarUsuario);

export default router;


