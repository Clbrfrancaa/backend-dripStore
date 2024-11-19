const { HostNotReachableError } = require("sequelize")
const categoryModel = require ('../models/CategoryModel')


const CategoryCreateValidation = async (req, res, next) => {
    try {

        const { name,slug } = req.body
        if (!name || !slug) {
            const message = 'as credenciais são obrigatórias!'
            return res.status(400).json({
                sucess: false,
                message: message
            })
        }

        const categoryValidation = await categoryModel.findOne({ where: { email } });
        if (categoryValidation) {
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