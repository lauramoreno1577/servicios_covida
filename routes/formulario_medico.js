const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db')

router.get('/', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM formulario_medico', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });



 router.post('/medico-nuevo',(req,res)=>{
const {nombre_usuario,apellido_usuario,designación,titulo,municipios,cod_mnp,universidad,cod_hsp} = req.body;

let formulario_médico = [ nombre_usuario,apellido_usuario,designación,titulo,municipios,cod_mnp,universidad,cod_hsp];

let nuevoformulario_médico = `INSERT INTO formulario_medico( nombre_usuario,apellido_usuario,designación,titulo,municipios,cod_mnp,universidad,cod_hsp) VALUES(?,?,?,?,?,?,?,?)`;
mysqlConnection.query(nuevoformulario_médico,formulario_médico, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  res.json({ message:`medico registrado`, })
  });
});  


 module.exports = router;