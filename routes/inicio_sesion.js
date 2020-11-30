const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db')

router.get('/', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM inicio_sesion ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });

  router.post('/inicio_sesion-nuevo',(req,res)=>{
const {nombre_usuario,contraseña_usuario,cod_usuario } = req.body;

let inicio_sesion = [nombre_usuario,contraseña_usuario,cod_usuario];

let nuevoinicio_sesion = `INSERT INTO inicio_sesion( nombre_usuario,contraseña_usuario,cod_usuario) VALUES(?,?,?)`;
mysqlConnection.query(nuevoinicio_sesion, inicio_sesion, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  res.json({ message:`inicio_sesion registrado`, })
  });
});  


  module.exports = router