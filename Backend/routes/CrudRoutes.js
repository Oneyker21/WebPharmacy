const express = require('express');
const router = express.Router();






/* curl http://localhost:5000/crud/readclientes */

/* curl -X POST -H "Content-Type: application/json" -d "{\"nombre\":\"NombreCliente\",\"apellido\":\"ApellidoCliente\",\"telefono\":\"1234567890\"}" http://localhost:5000/crud/createclientes */

/* curl -X PUT -H "Content-Type: application/json" -d "{\"nombre\":\"NuevoNombre\",\"apellido\":\"NuevoApellido\",\"telefono\":\"98765432\"}" http://localhost:5000/crud/upgradeclientes/1 */

/* curl -X DELETE http://localhost:5000/crud/deleteclientes/1 */


module.exports = (db) => {




    return router;
};