const connection = require ('./database/connection')

require('../models/UserModel')
require('../models/ProductModel')
require('../models/CategoryModel')
require('../models/ImagesModel')
require('../models/ProductOptionModel')
require('../models/ProductsAndCategories')

connection.sync({alter:true})