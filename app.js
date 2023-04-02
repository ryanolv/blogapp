// Carregando módulos
const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
// const mongoose = require('mongoose');

// Configurações
    // body parser
    app.use(bodyParser.urlencoded({ extended:true }));
    app.use
    (bodyParser.json());

    // Handlebars
    app.engine('handlebars', engine());
    app.set('view engine', 'handlebars');
    app.set('views', './views');

    // Mongoose
    
// Rotas


// Outros
const PORT = 8080;
app.listen(PORT, () => {
    console.log("Server is running!");
});