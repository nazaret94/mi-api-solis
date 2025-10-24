import{
    createMensaje,
}
from "../models/mensajes.model.js"

//POST ap/mensaje
export const crearMensajes = async (req, res)=>{
    try{
        const {nombre, correo, mensaje } = req.body;
        if (!nombre || !correo || !mensaje) {
            return res.status(400).json({ error: 'Faltan datos obligatorios.' });
        }

        const affectedRows = await createMensaje(nombre,correo,mensaje)
        
        if (!affectedRows) {
            return res.status(500).json({ error: "No se pudo insertar el mensaje." });
        }

        res.status(201).json({nombre,correo,mensaje})
    }
    catch(err){
        console.error("Error al crear categoria", err);
        res.status(500).json({error: "Ocurrio un error al crear el mensaje."})
    }
};