const axios = require ('axios');
const { request, responese} = require ('express');



const getpeliculas =  (req = request, res = response) =>{
    const { anio, ... resto } = req.query;
    console.log(req.query);
    console.log(resto);
    //en la url lo que va despues del ? son los queryparams
    // ej: http://localhost:5000/api/v1/demo/peliculas?anio=2023&categoria=suspenso&directores=cameron
    res.status(401).json({name:'peliculas del año ${anio}'});
}

const getpelicula =  (req = request, res = response) =>{
    const {id} = req.params;
    console.log(id);
    res.json({name:'pelicula con ID ${id}'});
}


const getestrenos = (req = request, res = response) => {
    res.json({name:'estrenos'});
}

const getactores = (req = request, res = response) =>{
    res.json({name:'actores'});
}

const getorigenNombre = (req = request, res = response) =>{
    console.log(req.params);
    const {name} = req.params;
    axios.get('https://api.nationalize.io/?name=' + name)
        .then( (response) => {
            // handle success
            console.log(response);
            res.status(200).json({
                status:response.status,
                data:response.data,
                statusText : response.statusText,
                name: 'origen nombre ' + name}) 
            })
            
        .catch( (error) => {
            // handle error
            console.log(error);
            res.status(401).json({msg: 'error insesperado'}) 
        });

}
module.exports = {
    getpeliculas,
    getestrenos,
    getactores,
    getpelicula,
    getorigenNombre
};