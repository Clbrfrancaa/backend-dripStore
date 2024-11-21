const connection = require ('../config/database/connection')
const { DataTypes, SequelizeScopeError, DatabaseError } = require ('sequelize')
const ProductModel = require ('./ProductModel')
const CategoryModel = require ('./CategoryModel')

const ProductAndCategory = connection.define('Products_Categories', {
    product_id: {
        type: DataTypes.INTEGER(),
        allowNull: false,
        references: {
            model: ProductModel,
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    category_id: {
        type: DataTypes.INTEGER(),
        allowNull: false,
        references: {
            model: CategoryModel,
            key: 'id'
        },
        onDelete: 'CASCADE'
    }
})

module.exports = ProductAndCategory;