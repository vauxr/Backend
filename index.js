import express from 'express';
const app=express();
import router from './src/Routes/routes.js';
app.use(express.json({ extended: false }));
app.use(router);
app.set('port',5000)
app.listen(app.get('port'));
console.log(`Servidor Activo en Puerto ${app.get('port')}`);