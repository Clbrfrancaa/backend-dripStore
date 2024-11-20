const { HostNotReachableError } = require("sequelize")
const categoryModel = require ('../models/CategoryModel')
const { isName } = require('validator')

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

        const categoryValidation = await categoryModel.findOne({ where: { name } });
        if (categoryValidation) {
            const message = 'Categoria já cadastrado'
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



module.exports = { CategoryCreateValidation }