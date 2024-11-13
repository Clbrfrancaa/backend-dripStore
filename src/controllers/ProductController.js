const productModel = require ('../models/ProductModel')
const ProductList = async (req, res, next) => {
    try {
        const users = await userModel.findAll()
        res.send(users)
    } catch (error) {
        res.send({
            'success': false,
            'error': `erro na requisicao ${error}`

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

module.exports = { ProductList, ProductRegister };

