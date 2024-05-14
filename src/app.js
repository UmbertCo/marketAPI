import express from "express";
import postRoutes from "./routes/post.routes.js";
import userRoutes from "./routes/user.routes.js";
import { sess } from "./middlewares/auth.js";
const app = express();

app.use(express.json());
app.use(postRoutes);
app.use(userRoutes);
app.use(sess);
export default app;
