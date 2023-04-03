const User = require('../models/User')

class UserController {

    static async register(req, res) {
        
        // Extraindo dados
        const { name, cpf, date_of_birth } = req.body;

        // Validando dados
        if(!name) {
            res.status(422).json({ message: 'O nome é obrigatório!' });
            return
        }
        if(!cpf) {
            res.status(422).json({ message: 'O cpf é obrigatório!' });
            return
        }
        if(!date_of_birth) {
            res.status(422).json({ message: 'A data de nascimento é obrigatória!' });
            return
        }

        // Consulta se o usuário existe na tabela
        const userExists = await User.findByPk(cpf);
        if(userExists) {
            res.status(422).json({ message: 'Usuário já existe' });
            return
        }
        
        // Registrar usuário na base de dados
        await User.create({
            name: name,
            cpf: cpf,
            date_of_birth: date_of_birth
        }).then( _ => res.status(200).json({ message: 'Usuário cadastrado com sucesso!' }))
        .catch( err => res.status(422).json({ message: 'Falha ao cadastrar usuário. Tente novamente! ' + err }));
        
    }

    static async search(req, res) {

        const cpf = req.body.cpf

        // consultar existência de cpf
        const userExists = await User.findByPk(cpf);


        // Caso usuário não exista
        if(userExists == null) {
            res.status(422).json({ message: 'Usuário não existe!' })
            return
        }

        // Resgatar dados do usuário na base de dados 
        res.json({ message: `Usuário ${userExists.name}, portador do cpf: ${userExists.cpf} e 
                            nascido na data: ${userExists.date_of_birth}`});


    }


}

module.exports = UserController;