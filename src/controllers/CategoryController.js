const categoryModel = require ('../models/CategoryModel')

const CategoryList = async (req,res, next) => {
    try {
        const categories = await categoryModel.findAll()
        res.send(categories)
    } catch (error) {
        res.send ({
            'sucess': false,
            'error':`Erro na requisição ${error}`
        })
    }
}



const CategoryCreate = async (req,res,next) => {
    try {
        const name = req.body.name
        const slug = req.body.slug
        

        const category = await categoryModel.create({
            name:name,
            slug:slug,
        })

        res.status(201).send({
            'sucess':true,
            'message':`Categoria criada com sucesso! ${category.id - category.name}`
        })

    } catch (error) {
        res.status(400).send({
            'sucess': false,
            'error': `erro na requisição ${error}`
        })
    }
}



const CategoryUpdate = async (req,res,next) => {
    try {
        const id = req.params.id
        const category = await categoryModel.update(req.body, {
            where: { id }
        });

        if (category == true) {
            res.status(204).send({
                'sucess':true,
                'message':`Categoria modificada com sucesso!`
            })
        } else {
            res.status(400).send({
                'sucess':true,
                'message':`Categoria não encontrada!`
            })
        }


    } catch (error) {
        res.status(404).send({
            'sucess': false,
            'message': `Falha na alteração da categorias! ${error}`
        })
    }
}


const CategoryDelete = async (req,res,next) => {
    try {
        const id = req.params.id
        const category = await categoryModel.destroy({
            where: {id}
        })

    if (category == true) {
        res.status(204).send({
            'sucess':true,
            'message':`Categoria deletada com sucesso!`
        })
    } else {
        res.status(400).send({
            'sucess':true,
            'message':`Categoria não encontrada!`
        })
    }

        
    } catch (error) {
        res.status(404).send({
            'sucess':false,
            'message':`Erro ao deletar categoria! ${error}`
        })
    }
}


module.exports = {
    CategoryList, CategoryCreate, CategoryUpdate, CategoryDelete
}