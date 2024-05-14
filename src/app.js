import express from "express";
import projectRoutes from "./routes/post.routes.js";
import { sess } from "./middlewares/auth.js";
const app = express();

app.use(express.json());
app.use(projectRoutes)
app.use(sess)
export default app;
