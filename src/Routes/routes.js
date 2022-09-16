import  {Router} from 'express';
import {getMascotas, postMascotas, putMascotas, deleteMascotas} from '../Controllers/Controller.js';


const router=Router();

router.get('/',(req,res)=>{
  res.send("Hola estamos en Index");
});

router.get('/mascotas',getMascotas);

router.post('/mascotas',postMascotas);

router.put('/mascotas/:id',putMascotas);

router.delete('/mascotas/:id',deleteMascotas);


export default router;