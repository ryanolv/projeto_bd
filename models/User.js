const conn = require('../db/conn')

const User = conn.sequelize.define('usuarios', {
    name: {
        type: conn.Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: conn.Sequelize.BIGINT,
        primaryKey: true,
    },
    date_of_birth: {
        type: conn.Sequelize.DATE,
        allowNull: false
    }
});

User.sync({ force: true })

module.exports = User;