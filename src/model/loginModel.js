const conn = require('./conn')

const verificarPessoaBanco = async (email) => {

    const sql = 'SELECT * FROM Clientes WHERE email = ?';
    const [consulta] = await conn.execute(sql, [email]);

    return consulta;
}



module.exports = {
    verificarPessoaBanco
};