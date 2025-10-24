import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import alumnoRouter from "./routers/alumno.routers.js"
import mensajesRoutes from './routers/mensajes.routers.js';
import { swaggerUi,swaggerSpec } from "./docs/swagger.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/mensaje', mensajesRoutes)
app.use("/api/alumno", alumnoRouter)
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get("/", (req, res)=>{
    res.json({ok:true, msg: "El API funciona, is alive!!!"});
});

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log("Servidor UP!")
});