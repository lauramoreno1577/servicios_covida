const express = require('express');
const app = express();
const inicio_sesion = require('./routes/inicio_sesion');
const registro = require('./routes/registro');
const dist_hospital = require('./routes/dist_hospital');
const municipio = require('./routes/municipio');
const perfil = require('./routes/perfil');
const usuarios = require('./routes/usuarios');
const formulario_medico = require('./routes/formulario_medico');


require('dotenv').config()

app.set('port', process.env.PORT || 3000);


app.use(express.json());


app.get('/',(req, res)=>{
  res.send('Esta es mi primera conexión con MYSQL y NodeJs')
})

app.use('/api/inicio_sesion', inicio_sesion);
app.use('/api/registro', registro);
app.use('/api/dist_hospital',dist_hospital);
app.use('/api/municipio',municipio);
app.use('/api/perfil',perfil);
app.use('/api/usuarios',usuarios);
app.use('/api/formulario_medico',formulario_medico);


app.listen(app.get('port'),()=>{
  console.log(`Servidor corriendo en el puerto ${app.get('port')}`)
})