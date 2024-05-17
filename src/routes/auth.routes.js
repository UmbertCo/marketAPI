import { Router } from "express";
import { registerUser, login } from "../controllers/auth.controller.js";

const router = Router();

router.post("/login", login);
router.post("/auth/register", registerUser);

export default router;
