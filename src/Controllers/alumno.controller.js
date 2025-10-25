import{ getAlumno } from "../models/alumno.model.js"

//Get api/alumno
export const listarAlumno = async(req, res)=>{
    try {
    const data = await getAlumno();
    res.status(200).json([data]); 
    } catch (err) {
    console.error("Ocurrió un error:", err);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
