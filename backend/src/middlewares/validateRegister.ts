import type { Request, Response, NextFunction } from "express";

import { prisma } from "../lib/prisma.js";

export async function validateRegister(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { user, email, password, confirmPassword } = req.body;

  if (!user || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: "Preencha todos os campos." });
  }

  if (
    !user.trim() ||
    !email.trim() ||
    !password.trim() ||
    !confirmPassword.trim()
  ) {
    return res.status(400).json({ message: "Preencha todos os campos." });
  }

  const resultUser = await prisma.user.findUnique({
    where: {
      user: user,
    },
  });

  if (resultUser) {
    return res.status(400).json({ message: "Nome de usuário já cadastrado." });
  }

  const resultEmail = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (resultEmail) {
    return res.status(400).json({ message: "Email já cadastrado." });
  }

  if (!email.includes("@") || !email.includes(".")) {
    return res.status(400).json({ message: "Email inválido." });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: "Senha muito curta." });
  }

  if (password != confirmPassword) {
    return res.status(400).json({
      message: "Confirme sua senha corretamente.",
    });
  }

  next();
}
