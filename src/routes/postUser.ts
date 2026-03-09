import { Router, Request, Response, NextFunction } from "express";
import fs from "fs/promises";
import jwt from "jsonwebtoken";
import { User } from "../models/types";
import { authenticateToken, AuthenticatedRequest } from "../middleware/authentication";


const router = Router();
const filePath = "./src/data/users.json";

router.post(
  "/login",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, password } = req.body as {
        username?: string;
        password?: string;
      };

      if (!username || !password) {
        return res.status(400).json({
          success: false,
          message: "Username and password are required",
        });
      }

      const file = await fs.readFile(filePath, "utf-8");
      const usersFile: User[] = JSON.parse(file);

      const existingUser = usersFile.find((user) => user.username === username);

      if (!existingUser || existingUser.password !== password) {
        return res.status(401).json({
          success: false,
          message: "Invalid username or password",
        });
      }

      const secret = process.env.JWT_SECRET_KEY;

      if (!secret) {
        return res.status(500).json({
          success: false,
          message: "JWT secret is not configured",
        });
      }

      const token = jwt.sign(
        {
          id: existingUser.id,
          username: existingUser.username,
          role: existingUser.role,
        },
        secret,
        { expiresIn: "1h" }
      );

      return res.status(200).json({
        success: true,
        data: {
          userId: existingUser.id,
          username: existingUser.username,
          email: existingUser.email ?? null,
          token,
        },
      });
    } catch (error) {
      return next(error);
    }
  }
);

export default router;