import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "API Portafolio",
      version: "1.0.0",
      description: "Esta API obtiene la información del alumno y permite insertar mensajes desde el portafolio.",
    },
    servers: [{ url: "http://localhost:" + (process.env.PORT || 3000) }],
    components: {
      schemas: {
        Alumno: {
          type: "object",
          properties: {
            alumno: {
              type: "object",
              properties: {
                correo: { type: "string", format: "email" },
                github: { type: ["string", "null"] },
                nombre: { type: "string" },
                linkedin: { type: ["string", "null"] },
                telefono: { type: "string" },
                id_alumno: { type: "integer" }
              },
              required: ["correo", "nombre", "telefono", "id_alumno"]
            },
            mensajes: {
              type: ["array", "null"],
              items: {
                type: "object",
                properties: {
                  id_mensaje: { type: "integer" },
                  contenido: { type: "string" },
                  fecha: { type: "string", format: "date-time" }
                },
                required: ["id_mensaje", "contenido"]
              }
            },
            educacion: {
              type: "array",
              items: { $ref: "#/components/schemas/Educacion" }
            },
            experiencia: {
              type: "array",
              items: { $ref: "#/components/schemas/Experiencia" }
            },
            habilidades: {
              type: "array",
              items: { $ref: "#/components/schemas/Habilidad" }
            },
            proyectos: {
              type: ["array", "null"],
              items: {
                type: "object",
                properties: {
                  id_proyecto: { type: "integer" },
                  nombre: { type: "string" },
                  descripcion: { type: "string" },
                  url: { type: ["string", "null"] },
                  fecha: { type: ["string", "null"], format: "date" }
                },
                required: ["id_proyecto", "nombre", "descripcion"]
              }
            }
          },
          required: ["alumno", "educacion", "experiencia", "habilidades"]
        },
        Educacion: {
          type: "object",
          properties: {
            logo: { type: ["string", "null"] },
            nombre: { type: "string" },
            fecha_fin: { type: ["string", "null"], format: "date" },
            institucion: { type: "string" },
            fecha_inicio: { type: ["string", "null"], format: "date" },
            id_educacion: { type: "integer" }
          },
          required: ["nombre", "institucion", "id_educacion"]
        },
        Experiencia: {
          type: "object",
          properties: {
            logo: { type: ["string", "null"] },
            puesto: { type: "string" },
            empresa: { type: "string" },
            fecha_fin: { type: ["string", "null"], format: "date" },
            descripcion: { type: "string" },
            fecha_inicio: { type: ["string", "null"], format: "date" },
            id_experiencia: { type: "integer" }
          },
          required: ["puesto", "empresa", "descripcion", "id_experiencia"]
        },
        Habilidad: {
          type: "object",
          properties: {
            logo: { type: ["string", "null"] },
            nivel: { type: ["string", "null"] },
            nombre: { type: "string" },
            id_habilidades: { type: "integer" }
          },
          required: ["nombre", "id_habilidades"]
        },
        Error: {
          type: "object",
          properties: {
            error: { type: "string", example: "Mensaje de error" }
          }
        }
      },
      requestBodies: {
        MensajeCreate: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["nombre"],
                properties: {
                  nombre: { type: "string", example: "Nazaret" },
                  correo: { type: "string", example: "Naz@hotmail.com" },
                  mensaje: { type: "text", example: "hola me gustaria agendar una cita de trabajo" },
                },
              },
            },
          },
        },
      },
    }
  },
  apis: ["./src/routers/*.js"]
};

export const swaggerSpec = swaggerJSDoc(options);
export { swaggerUi };
