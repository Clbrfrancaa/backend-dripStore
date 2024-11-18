const connection = require ('../config/database/connection')
const { DataTypes } = require ('sequelize')
const ProductModel = require ('./ProductModel')

const ImageModel = connection.define ('Image', {
    product_id: {
        type: DataTypes.INTEGER(),
        allowNull: false,
        references: {
            model: ProductModel,
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    enabled: {
        type: DataTypes.BOOLEAN(),
        defaultValue: 0,
        allowNull: true
    },
    path: {
        type: DataTypes.STRING(300),
        allowNull: false
    }
    
})

module.exports = ImageModel;