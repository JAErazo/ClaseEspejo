const { Router }= require('express');

const routerUsuario = Router();

routerUsuario.get('/', (req, res) => {
    res.send('Hola estudiantes Clase espejo U.Mariana - UNIREMINGTON!')
  })

module.exports = routerUsuario;