import { Router } from "express";
import { createUser, getUsers } from "../controllers/users.controller.js";

const router = Router();

router.get("/getUsers", getUsers)
router.post("/createUser", createUser);

export default router;
