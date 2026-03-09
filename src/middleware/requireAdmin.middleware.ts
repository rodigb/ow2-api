import { Response, NextFunction } from "express";
import { AuthenticatedRequest } from "./authentication.middleware";
import { User } from "../models/types";

export const requireAdmin = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    return res.status(401).json({
      message: "Authentication required",
    });
  }

  if ((req.user as User).role !== "admin") {
    return res.status(403).json({
      message: "Admin access required",
    });
  }

  next();
};