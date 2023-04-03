const Sequelize = require("sequelize");

// Conexão com o banco de dados
const sequelize = new Sequelize('projeto_bd', 'root', 'Ryan@2', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}