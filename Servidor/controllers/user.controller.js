const { response, request }= require('express');
const { PrismaClient } =require('@prisma/client')

const prisma = new PrismaClient();

const agregarUsuario = async(req=request, res=response) => {

    const {email, username} = req.body;

    const result = await prisma.user.create({
        data:{
            email,
            username
        }
    }).catch((e)=>{
        return e.message;
    }).finally(async ()=>{
        await prisma.$disconnect()
    })

    res.json({
        result
    })
}

const mostrarUsuarios = async(req=request, res=response) => {

    const usuarios= await prisma.user.findMany()
    .catch((e)=>{
        return e.message;
    }).finally(async ()=>{
        await prisma.$disconnect()
    })

    res.json({
        usuarios
    })
}

const editarUsuarios = (req=request, res=response) => {
    res.json({
        msg: "Nos vemos en la proxima sesion"
    })
}

const eliminarUsuarios = (req=request, res=response) => {
    res.json({
        msg: "Nos vemos en la proxima sesion"
    })
}

module.exports = {
    agregarUsuario,
    mostrarUsuarios,
    editarUsuarios,
    eliminarUsuarios
}