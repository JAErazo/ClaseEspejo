const { response, request }= require('express');

const agregarUsuario = (req=request, res=response) => {
    res.json({
        msg: "Muchas gracias por su atencion"
    })
}

const mostrarUsuarios = (req=request, res=response) => {
    res.json({
        msg: "Nos vemos en la proxima sesion"
    })
}

module.exports = {
    agregarUsuario,
    mostrarUsuarios
}