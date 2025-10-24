import { Router } from "express";
import {
    crearMensajes,
} from "../Controllers/mensajes.controller.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Portafolio Solis Torres Mariana 
 *   description: Operaciones de leer y insertar para el portafolio
 */

/**
 * @swagger
 * /api/mensaje:
 *   post:
 *     summary: Creado el mensaje
 *     tags: [Alumno]
 *     requestBody:
 *       $ref: '#/components/requestBodies/MensajeCreate'
 *     responses:
 *       201:
 *         description: Mensaje creado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *       400:
 *         description: Datos inválidos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Error del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post("/", crearMensajes);

export default router;
