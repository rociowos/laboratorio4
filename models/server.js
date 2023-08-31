const express = require('express');

class Server{
    constructor(){
        this.port = process.env.PORT || 3000;

        this.app = express();

        this.routers();
    }

    routers(){
        this.app.get('/', function (req, res){
            res.send('Hello world');
        })
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log(`Example app listening on port ${this.port}`);
        });
    }
}

module.exports = Server;