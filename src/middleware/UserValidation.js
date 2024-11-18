const { HostNotReachableError } = require("sequelize")
const userModel = require ('../models/UserModel')


const UserCreateValidation = async (req, res, next) => {
    try {

        const { firstname, surname, email, password } = req.body
        if (!firstname || !surname || !email || !password) {
            const message = 'firstname, surname, email e password são obrigatorios'
            return res.status(400).json({
                sucess: false,
                message: message
            })
        }

        const emailValidation = await userModel.findOne({ where: { email } });
        if (emailValidation) {
            const message = 'Email já cadastrado'
            return res.status(400).json({
                success: false,
                message: message
            })
        }

            next()

        } catch (error) {
            return res.status(400).json({
                success: false,
                message: `Erro: ${error}`
            })

        }
    }



module.exports = { UserCreateValidation }