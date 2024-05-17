import express from "express";
import postRoutes from "./routes/post.routes.js";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
const app = express();

app.use(express.json());
app.use(postRoutes);
app.use(userRoutes);
app.use(authRoutes);
export default app;
