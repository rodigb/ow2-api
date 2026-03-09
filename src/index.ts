import express, { Request, Response } from "express";
import getHeroesRouter from "./routes/getHeroes";
import postHeroesRouter from "./routes/postHeroes";
import postUserRouter from "./routes/postUser";
import dotenv from "dotenv";

const app = express();
app.use(express.json());

dotenv.config();

app.get("/", (req: Request, res: Response) => {
  res.send("API is running 🚀");
});

app.use("/heroes", postHeroesRouter);
app.use("/heroes", getHeroesRouter);
app.use("/", postUserRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});