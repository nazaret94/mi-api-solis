import{ getAlumno } from "../models/alumno.model.js"

//Get api/alumno
export const listarAlumno = async(req, res)=>{
    try{
        const data = await getAlumno();
        res.status(200).json(data)
    }
    catch(err){
        console.error("Ocurrio un error", err)
        res.status(500).json({err: "Error al listar al alumno"})
    }
};
