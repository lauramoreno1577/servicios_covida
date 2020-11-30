const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db')


 router.post('/registro-nuevo',(req,res)=>{
const {nombre_usuario,apellido_usuario,designación,nombre_mnp,cod_usuario,cod_mnp,edad_usuario } = req.body;

let registro = [ nombre_usuario,apellido_usuario,designación,nombre_mnp,cod_usuario,cod_mnp,edad_usuario];

let nuevoregistro = `INSERT INTO registro( nombre_usuario,apellido_usuario,designación,nombre_mnp,cod_usuario,cod_mnp,edad_usuario) VALUES(?,?,?,?,?,?,?)`;
mysqlConnection.query(nuevoregistro, registro, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  res.json({ message:`usuario registrado`, })
  });
});  


 module.exports = router;
