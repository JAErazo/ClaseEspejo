const { Router }= require('express');

const {agregarUsuario, mostrarUsuarios} = require('../controllers/user.controller')

const routerUsuario = Router();

routerUsuario.get('/', agregarUsuario)
routerUsuario.get('/mensaje', mostrarUsuarios)

module.exports = routerUsuario;