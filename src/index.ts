import express, { Request, Response } from "express";
import getHeroesRouter from "./routes/getHeroes";
import postHeroesRouter from "./routes/postHeroes";
import postUserRouter from "./routes/postUser";
import dotenv from "dotenv";
import { authenticateToken } from "./middleware/authentication.middleware";
import { requireAdmin } from "./middleware/requireAdmin.middleware";

const app = express();
app.use(express.json());

dotenv.config();

app.get("/", (req: Request, res: Response) => {
  res.send("API is running 🚀");
});

app.use("/heroes", authenticateToken, postHeroesRouter);
app.use("/heroes", authenticateToken, getHeroesRouter);
app.use("/", postUserRouter);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});