import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function validateToken(
  req: Request,
  res: Response,
  next: NextFunction,
) {
    const authHeader = req.headers.authorization;

    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Token não fornecido." })
    }

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET as string
        );
        
        (req as any).user = decoded;

        next();
    } catch(err) {
        return res.status(403).json({ message: "Token inválido ou expirado." })
    }
}
