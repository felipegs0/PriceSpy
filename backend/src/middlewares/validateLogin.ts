import type { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";

import { prisma } from "../lib/prisma.js";

export async function validateLogin(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { user, password } = req.body;

  if (!user || !password) {
    return res.status(400).json({ message: "Preencha todos os campos." });
  }

  if (!user.trim() || !password.trim()) {
    return res.status(400).json({ message: "Preencha todos os campos." });
  }

  const resultUser = await prisma.user.findUnique({
    where: {
        user: user,
    },
  })

  if (!resultUser) {
    return res.status(400).json({ message: "Usuário ou senha incorreto(s)."})
  }

  const resultPassword = await bcrypt.compare(password, resultUser.password)

  if (!resultPassword) {
    return res.status(400).json({ message: "Usuário ou senha incorreto(s)."})
  }
  
  next()
}
