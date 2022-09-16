import pg from 'pg';
const {Pool} = pg;
const pool = new Pool({  
  host: 'localhost',
  user: 'postgres',
  password: '12345678',
  database: 'mascotas',
  port: '5432'
});

const getMascotas = async (req,res)=>{
  try {
    const respuesta = await pool.query("SELECT * FROM mascotas");
    res.status(200).json(respuesta.rows);
  } catch (error) {
    res.status(400).json({mensaje: `${error}`});
  }
  
}

const postMascotas = async (req,res)=>{
  try {
    const {id,nombre} = req.body;
    const respuesta = await pool.query(`INSERT INTO mascotas VALUES(${id},'${nombre}')`);
    res.status(200).json({
      body: {
        mascota:{
          id,
          nombre
        }
      }
    });
  } catch (error) {
    res.status(400).json({mensaje: `${error}`});
  }
  
}

const putMascotas=async(req,res)=>{
  try {

    const {id} = req.params;
    const {nombre} = req.body;
    const respuesta=await pool.query(`UPDATE mascotas SET nombre='${nombre}' WHERE id='${id}'`);
    res.status(200).json({
      body:{
        id,
        nombre
      }
    });
    
  } catch (error) {
    res.status(400).json({mensaje: `${error}`});
  } 
}

const deleteMascotas = async(req,res)=>{
  try {

    const {id} = req.params;

    const respuesta=await pool.query(`DELETE  FROM mascotas  WHERE id='${id}'`);
    res.status(200).json({
      body:{
        id
      }
    });
    
  } catch (error) {
    res.status(400).json({mensaje: `${error}`});
  }
  
}


export {
  getMascotas,
  postMascotas,
  putMascotas,
  deleteMascotas
}