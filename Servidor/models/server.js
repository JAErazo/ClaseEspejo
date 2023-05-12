const express = require('express');

class Server {

    constructor(){
        this.app = express();
        this.port = 3000;

        this.routes();
    }

    routes(){
        this.app.use(require('../routes/usuarios.routes'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en el puerto', this.port);
        });
    }
}

module.exports = Server;