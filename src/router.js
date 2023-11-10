const express = require("express");
const router = express.Router();
const controller = require('./controller/loginController')


// Rota inicial e pública da API 
router.get("/", (_req, res) => res.status(200).send("olá, mundo"))

router.post("/login", controller.login)




module.exports = router;