const {Router} = require('express')

const route = Router()

//Listar todos los datos
const {getHurto, postHurto, putHurto, deleteHurto} = require ('../controllers/hurto') //IMPORTAR EL CONTROLADOR


route.get('/', getHurto)
route.post('/', postHurto)
route.put('/', putHurto)
route.delete('/', deleteHurto)





module.exports = route 