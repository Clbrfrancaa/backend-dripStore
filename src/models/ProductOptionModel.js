const connection = require ('../config/database/connection')
const { DataTypes, SequelizeScopeError, DatabaseError } = require ('sequelize')
const ProductModel = require ('./ProductModel')
const { text } = require('express')

const ProductOption = connection.define ('Product_Option', {
    product_id: {
        type: DataTypes.INTEGER(),
        allowNull: false,
        references: {
            model: ProductModel,
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    title: {
        type: DataTypes.STRING(300),
        allowNull: false
    },
    shape: {
        type: DataTypes.ENUM("square", "circle"),
        allowNull: false,
        defaultValue: 'square'
    },
    radius: {
        type: DataTypes.INTEGER(),
        allowNull: true,
        defaultValue: 0
    },
    type: {
        type: DataTypes.ENUM("text", "color"),
        allowNull: true,
        defaultValue: "text"
    },
    values: {
        type: DataTypes.STRING(),
        allowNull: false, 
    }

})

module.exports = ProductOption;