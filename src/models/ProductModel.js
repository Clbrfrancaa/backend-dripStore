const connection = require ('../config/database/connection')
const { DataTypes } = require ('sequelize')

const ProductModel = connection.define('Product', {
    enabled: {
        type: DataTypes.BOOLEAN(),
        allowNull: false,
        defaultValue:true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull:false
    },
    slug: {
        type: DataTypes.STRING(100),
        allowNull:false
    },
    use_in_menu: {
        type: DataTypes.BOOLEAN(),
        allowNull:true,
        defaultValue: 0
    },
    stock: {
        type: DataTypes.INTEGER(),
        defaultValue: 0,
        allowNull:true
    },
    description:{
        type: DataTypes.STRING(300),
        allowNull:true
    },
    price:{
        type: DataTypes.FLOAT(),
        allowNull:false
    },
    price_with_discount: {
        type: DataTypes.FLOAT(),
        allowNull:false
    }
})

module.exports = ProductModel;
