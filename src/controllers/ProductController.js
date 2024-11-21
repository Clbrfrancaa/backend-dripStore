const productModel = require ('../models/ProductModel')
const ProductList = async (req, res, next) => {
    try {
        const users = await productModel.findAll()
        res.send(users)
    } catch (error) {
        res.send({
            'success': false,
            'error': `erro na requisicao ${error}`

        })

    }
}

const ProductListId = async (req, res, next) => {
    try {
        const id = req.params.id
        const productId = await productModel.findOne(
            { where: { id }}
        )
        if (!productId) {
            return res.status(404).json({
                sucess:false,
                message:`Produto não encontrado!`
            })
        }

        res.send(productId)

    } catch (error) {
        return res.status(400).json({
            sucess:false,
            message:`Falha de requisição ${error}`
        })
    }
}
const ProductRegister = async (req, res, next) => {

    try {
        const enabled = req.body.enabled
        const name = req.body.name
        const slug = req.body.slug
        const useInMenu = req.body.use_in_menu
        const stock = req.body.stock
        const description = req.body.description
        const price = req.body.price
        const priceWithDiscout = req.body.price_with_discount

        const product = await productModel.create({
            enabled: enabled,
            name: name,
            slug: slug,
            use_in_menu: useInMenu,
            stock: stock,
            description: description,
            price: price,
            price_with_discount: priceWithDiscout

        });

        res.send({
            'success': true,
            'message': 'produto cadastrado com sucesso'
        })

    } catch (error) {
        res.send({
            'success': false,
            'error': `erro na requisicao ${error}`
        })
    }

}


const ProductUpdate = async (req,res,next) => {
    try {
        const id = req.params.id
        const product = await productModel.update(req.body, {
            where: { id }
        })

        if (product == true) {
            res.status(204).send({
                'sucess': true,
                'message':`Produto atualizado com sucesso!`
            })
        } else {
            res.status(400).send({
                'sucess':true,
                'message':`Produto não encontrado!`
            })
        }
    } catch (error) {
        res.status(404).send({
            'sucess': false,
            'message': `Falha na alteração do produto! ${error}`
        })
    }
}

const ProductDelete=async(req,res,next)=>{


    try{
      const id=req.params.id
      const validarId= await productModel.findOne({where:{id:id}})
      
      if(validarId){
        
      const product = await productModel.destroy({
        where:{id}
      })
      res.status(204).send({
        success:true,
        message:`produto deletado com sucesso ${product.id - product.nome}`
      }) 
    }else{
      res.status(400).send({
        success:false,
        message:"produto nao encontrado"
      })
    }
    
    
    
    }catch(error){
      res.send({
        success:false,
        error:`erro na requisição ${error}`
      })
    }
    }

module.exports = { ProductList, ProductListId, ProductRegister, ProductUpdate, ProductDelete };

