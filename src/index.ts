import express, { Request, Response } from "express";
import  heroes  from "./data/ow2_heroes.json";

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("API is running 🚀");
});

app.get("/users", (req: Request, res: Response) => {
  res.json([
    { id: 1, name: "John" },
    { id: 2, name: "Jane" }
  ]);
});

app.get("/heroes", (req, res) => {
  res.json(heroes);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});