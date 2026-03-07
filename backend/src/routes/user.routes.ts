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

router.post("/profile", validateToken, async (req, res) => {
    try {
        const { productName, url, actualPrice, targetPrice } = req.body;

        await prisma.product.create({
            data: {
                name: productName,
                url: url,
                actualPrice: actualPrice,
                targetPrice: targetPrice,
                userId: (req as any).user.id
            }
        });

        return res.status(201).json({ message: "Produto criado!" });
    } catch(err: any) {
        console.log(err)
        return res.status(500).json({ message: "Erro no servidor." })
    }
})

export default router;
