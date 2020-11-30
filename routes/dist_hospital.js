const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db')

router.get('/', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM dist_hospital ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });

  router.post('/nuevo-hospital', (req,res)=>{
  
  const {cod_hsp,nombre,municipios,id_medico,cod_mnp} = req.body;
  let dist_hospitalArray  = [cod_hsp,nombre,municipios,id_medico,cod_mnp];
  let nuevoHospital = 'INSERT INTO dist_hospital(cod_hsp,nombre,municipios,id_medico,cod_mnp) VALUES(?,?,?,?,?)';

  mysqlConnection.query(nuevoHospital,dist_hospitalArray,(err, results,fields)=>{
    if(err){
      return console.error(err.message);
    }
    res.json({message:'Hospital creado correctamente'})

  })
})

 module.exports = router;