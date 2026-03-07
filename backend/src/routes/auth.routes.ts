import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma.js";

import { validateRegister } from "../middlewares/validateRegister";
import { validateLogin } from "../middlewares/validateLogin.js";

const router = express.Router();

router.post("/register", validateRegister, async (req, res) => {
  try {
    const { user, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        user,
        email,
        password: hashedPassword,
      },
    });

    return res.status(201).json({ message: "Usuário criado com sucesso!" });
  } catch (err: any) {
    console.log(err);

    return res.status(500).json({ message: "Erro no servidor." });
  }
});

router.post("/login", validateLogin, async (req, res) => {
  try {
    const { user } = req.body;

    const foundUser = await prisma.user.findUnique({
      where: {
        user: user,
      }
    })

    const token = jwt.sign(
      {
        id: foundUser?.id,
        user: foundUser?.user,
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "7d"
      }
    )

    return res.status(200).json({
      message: "Login realizado com sucesso",
      token
    })

  } catch (err: any) {
    console.log(err);

    return res.status(500).json({ message: "Erro no servidor." });
  }
});

export default router;