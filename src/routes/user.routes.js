import { Router } from "express";
import { registerUser } from "../controllers/user.controller"; 

const router = Router();

router.route("/").get(healthcheck);

export default router;
