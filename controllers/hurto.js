const { response } = require('express');
const hurto = require('../models/hurto');

Hurto = require('../models/hurto')

const getHurto = async (req, res) => {
    const hurto = await Hurto.find(); //OBTENER TODOS LOS DOCUMENTOS DE UNA COLECCION
    res.json({
        msg: hurto
    })
}

const postHurto = async (req, res) => {

    const datos = req.query //CAPTURAR DATOS DE LA URL-POSTMAN
    let mensaje = 'Insercion exitosa'

    try {
        const hurto = new Hurto(datos) //INSTANCIAR
        await hurto.save() //GUARDAR EN LA BASE DE DATOS
        console.log(hurto)
        
    } catch (error) {

        mensaje = error
        console.log(error)

    }
    res.json({
        msg: mensaje
    })
}

const putHurto = async (req, res) => {
    const {TipoHurto, direccion, fecha, ciudad, descripcion} = req.query //DESESTRUCTURAR
    let mensaje = ''

    try {
        const hurto = await Hurto.findOneAndUpdate({TipoHurto : TipoHurto}, {direccion : direccion}, {fecha : fecha}, {ciudad : ciudad}, 
            {descripcion: descripcion})
        mensaje = 'Actualizacion exitosa'
    } catch (error) {
        mensaje = error
    }
    res.json ({
        msg : mensaje
    })
}

const deleteHurto = async (req, res) => {
    const {descripcion} = req.query //DESESTRUCTURAR
    let mensaje = ''

    try {
        const hurto = await Hurto.findOneDelete ({descripcion : descripcion})
        mensaje = 'eliminacion exitosa'
    } catch (error) {
        mensaje = error
    }
    res.json ({
        msg : mensaje
    })
}

module.exports = {
    getHurto,
    postHurto,
    putHurto,
    deleteHurto,
}