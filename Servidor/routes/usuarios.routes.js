const { Router }= require('express');

const {agregarUsuario, mostrarUsuarios} = require('../controllers/user.controller')

const routerUsuario = Router();

routerUsuario.get('/', mostrarUsuarios);
routerUsuario.post('/', agregarUsuario);

module.exports = routerUsuario;