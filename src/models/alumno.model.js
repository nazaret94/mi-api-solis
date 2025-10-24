import { pool } from "../config/db.js";

export async function getAlumno(){
    const[resultSets] = await pool.query("CALL obtener_alumno_completo();");
    const first = Array.isArray(resultSets) ? resultSets[0] ?? resultSets : resultSets;
    return first;
}


