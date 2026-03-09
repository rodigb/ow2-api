import { Router, Request, Response } from "express";
import heroes from "../data/ow2_heroes.json";

const router = Router();

router.get("/", (req, res) => {
  const { role, name } = req.query;
  let result = heroes;

  if (role) {
    result = result.filter(
      (hero) => hero.role.toLowerCase() === (role as string).toLowerCase(),
    );
  }
  if (name) {
    result = result.filter((hero) =>
      hero.name.toLowerCase().includes((name as string).toLowerCase()),
    );
  }

  res.json(result);
});

router.get("/:id", (req, res) => {
  const hero = heroes.find((hero) => hero.id === parseInt(req.params.id));
  if (hero) {
    res.json(hero);
  } else {
    res.status(404).json({ message: "Hero not found" });
  }
});

export default router;
