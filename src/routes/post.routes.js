import { Router } from "express";
import { createPosts, getPosts } from "../controllers/posts.controller.js";

const router = Router();

router.get("/getPosts", getPosts);
router.post("/createPost", createPosts);

export default router;
