const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db')

router.get('/', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM perfil ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });

router.put('/perfil/:id_usuario', (req, res) => {
  const {nombre,municipio,edad,id_usuario} = req.body;
  const {id} = req.params;
  mysqlConnection.query(`UPDATE perfil SET nombre = ?,municipio = ?,
  edad = ?,id_usuario = ?  WHERE id_usuario = ?`, 
  [nombre,municipio,edad,id_usuario,id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Perfil actualizado'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;