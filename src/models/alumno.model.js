import { pool } from "../config/db.js";

export async function getAlumno(){
     try {
    const [resultSets] = await pool.query(
      `CALL obtener_alumno_completo();` 
    );

    let perfil = resultSets[0]?.[0]?.perfil_completo;
    if (!perfil) perfil = "{}";

    perfil = JSON.parse(perfil);

    return {
      alumno: {
        id_alumno: perfil.alumno?.id_alumno ?? 0,
        nombre: perfil.alumno?.nombre ?? "string",
        correo: perfil.alumno?.correo ?? "user@example.com",
        telefono: perfil.alumno?.telefono ?? "string",
        github: perfil.alumno?.github ?? "Unknown Type: string,null",
        linkedin: perfil.alumno?.linkedin ?? "Unknown Type: string,null"
      },
      educacion: (perfil.educacion?.length
        ? perfil.educacion
        : [{ id_educacion: 0, nombre: "string", institucion: "string", fecha_inicio: "Unknown Type: string,null", fecha_fin: "Unknown Type: string,null", logo: "Unknown Type: string,null" }]
      ),
      experiencia: (perfil.experiencia?.length
        ? perfil.experiencia
        : [{ id_experiencia: 0, empresa: "string", puesto: "string", fecha_inicio: "Unknown Type: string,null", fecha_fin: "Unknown Type: string,null", descripcion: "string", logo: "Unknown Type: string,null" }]
      ),
      habilidades: (perfil.habilidades?.length
        ? perfil.habilidades
        : [{ id_habilidades: 0, nombre: "string", nivel: "Unknown Type: string,null", logo: "Unknown Type: string,null" }]
      ),
      proyectos: perfil.proyectos?.length ? perfil.proyectos : "Unknown Type: array,null",
      mensajes: perfil.mensajes?.length ? perfil.mensajes : "Unknown Type: array,null"
    };

  } catch (err) {
    console.error("Error en getAlumno:", err);
    throw err;
  }
}


