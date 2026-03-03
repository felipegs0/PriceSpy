import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma.js";

import { validateToken } from "../middlewares/validateToken.js";

const router = express.Router();

router.get("/profile", validateToken, (req, res) => {
    return res.json({
        message: "Perfil acessado",
        user: (req as any).user,
    })
});

export default router;
