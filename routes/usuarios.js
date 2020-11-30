const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db')

router.get('/', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM usuarios ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });
 
 router.post('/usuario-nuevo',(req,res)=>{
const {id_usuario,nombre_usuario,municipio,cod_mnp,designación,codigo } = req.body;

let usuario = [id_usuario,nombre_usuario,municipio,cod_mnp,designación,codigo];

let nuevousuario = `INSERT INTO usuarios(id_usuario,nombre_usuario,municipio,cod_mnp,designación,codigo)           VALUES(?,?,?,?,?,?)`;
mysqlConnection.query(nuevousuario, usuario, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  res.json({ message:`usuario registrado`, })
  });
});  


router.put('/usuario/:codigo', (req, res) => {
  const {id_usuario,nombre_usuario,municipio,cod_mnp,designación} = req.body;
  const { codigo } = req.params;
  mysqlConnection.query(`UPDATE usuarios SET id_usuario =?,nombre_usuario =?,municipio =?,cod_mnp=?,designación =? WHERE codigo = ?`, 
  [id_usuario,nombre_usuario,municipio,cod_mnp,designación,codigo], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Usuario actualizado'});
    } else {
      console.log(err);
    }
  });
});



  module.exports = router;