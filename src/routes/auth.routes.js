import { Router } from "express";
 import { createUser, getUsers } from "../controllers/users.controller.js";


const router = Router();

router.get("/getUsers", getUsers);
router.get("/createUser", createUser);

export default router;
