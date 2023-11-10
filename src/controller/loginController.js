const loginModel = require('../model/loginModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


const login = async (req, res) => {
    const { email, senha } = req.body;

    if (email == '' || senha == '') {
        res.status(422).json({ status : 'error', msg : 'Campos vazios' })    
    } else {

        try {
            const verificacao = await loginModel.verificarPessoaBanco(email);
    
            if (verificacao.idCliente) {
                res.status(200).json({ status : 'success', msg: 'Ó o caba ali homi' })
            } else {
                res.status(422).json({ status : 'error', msg : 'Não achei ninguém' })
            }
        } catch (error) {
            res.status(422).json({ status : 'error', msg : 'Erro ao entrar na conta' })
        }
    }

}


module.exports = {
    login
}