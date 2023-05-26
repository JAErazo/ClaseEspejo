const { Router }= require('express');

const {agregarUsuario, mostrarUsuarios} = require('../controllers/user.controller')

const routerUsuario = Router();

routerUsuario.get('/usuarios/', mostrarUsuarios);
routerUsuario.post('/usuarios/', agregarUsuario);

module.exports = routerUsuario;