const userModel = require ('../models/UserModel')
const dotenv = require('dotenv')
dotenv.config()

const Login = async (req, res, next)  => {
    try {
        const email = req.body.email
        const senha = req.body.senha
 
        const bcrypt = require ('bcrypt')
        const user = await userModel.findOne({
            where: { email }
        })
    
        const userPassword = user ? user.password : ''
        const hashValid = await bcrypt.compare(senha, userPassword)

        if (hashValid){
            const jwt = require('jsonwebtoken')
            const jwtSecret = process.env.JWT_SECRET
            const token = jwt.sign({id: 1, name: 'David'}, jwtSecret)
            
            res.send({
                sucess: true,
                token: token,
                error: ''
            })
        } else {
            res.send({
                sucess: true,
                token: '',
                error: 'Email ou senha inválidos!'
            })
        }

    } catch (error) {
        res.send({
            sucess: false,
            token: '',
            error: `Erro na requisição: ${error}`
        })
    }
}

module.exports = {
    Login
}
