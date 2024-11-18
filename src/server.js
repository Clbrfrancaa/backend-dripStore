const express = require('express')
const app = express()
app.use(express.json())

const login = require('./routes/RouterLogin')
app.use('/login', login);

const Produtos = require('./routes/RouterProduct');
app.use('/Produtos', Produtos );

const Users = require('./routes/RouterUsers');
app.use('/Users', Users);

const Category = require('./routes/RouterCategory');
app.use('/Category', Category);

const PORT = 3000
app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`)
})