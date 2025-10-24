import { pool } from "../config/db.js";


export async function createMensaje(nombre,correo,mensaje) {
    const conn = await pool.getConnection();

    try{
        const [resultSets] = await conn.query("CALL insertar_mensaje(?, ?, ?)", [ nombre, correo, mensaje]);
        const affectedRows = resultSets?.affectedRows;
        return affectedRows; 
    }catch(err){
        console.error("Error en createMensaje:", err);
        throw err;
    }finally{
        conn.release();
    }
}