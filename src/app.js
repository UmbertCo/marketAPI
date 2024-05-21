import express from "express";
import cors from 'cors'; // Importa 'cors' como un módulo ES
import postRoutes from "./routes/post.routes.js";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(cors({
    origin: 'http://localhost:8100', // Origen permitido
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
    credentials: true // Si necesitas enviar cookies
}));

app.use(express.json());
app.use(postRoutes);
app.use(userRoutes);
app.use(authRoutes);

export default app;
