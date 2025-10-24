import { Router } from "express";
import {
    listarAlumno,
} from "../Controllers/alumno.controller.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Portafolio Solis Torres Mariana 
 *   description: Operaciones de leer y insertar para el portafolio
 */

/**
 * @swagger
 * /api/alumno:
 *   get:
 *     summary: Lista de la informcion de alumno
 *     tags: [Alumno]
 *     responses:
 *       200:
 *         description: Lista del alumno
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Alumno'
 *       500:
 *         description: Error del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get("/", listarAlumno);

export default router;
