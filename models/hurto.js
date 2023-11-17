const {Schema, model} = require('mongoose')//Crear una coleccion o acceder a colecciones en mongo 

const DevolucionSchema = ({
    TipoHurto:{
        type: String,
        required:[true, 'El tipo es necesario'],
        enum:['con arma', 'sin arma' ]
    },

    direccion:{
        type:String,
        required:[true, 'la direccion es requerida']
    },
    
    fecha:{
        type:String,
        unique:true,
        required:[true, 'la fecha es necesaria'],
        
    },

    ciudad: {
        type:String,
        required:[true, 'la ciudad es requerido'],
        enum:['medellin', 'bogota', 'pasto'],
    },

    descripcion: {
        type:String,
        required:[true, 'la direccion es requerida']
    }
})


module.exports = model('Devolucion', DevolucionSchema)