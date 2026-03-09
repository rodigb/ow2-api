import { Router, Request, Response } from "express";
import heroes from "../data/ow2_heroes.json";
import { updateHeroSchema } from "../schemas/hero.schema";
import fs from "fs/promises";
import { requireAdmin } from "../middleware/requireAdmin.middleware";

const router = Router();

const filePath = "./src/data/ow2_heroes.json";

router.use(requireAdmin)

router.post("/addHero", async (req: Request, res: Response) => {
  try {
    const file = await fs.readFile(filePath, "utf-8");
    const heroesFile = JSON.parse(file);

    const validation = updateHeroSchema.safeParse(req.body);

    const newHero = {
      id: heroes.length + 1,
      ...validation.data,
    };

    if (!validation.success) {
      return res.status(400).json({
        message: "Invalid hero data",
        errors: validation.error,
      });
    }

    heroesFile.push(newHero);

    await fs.writeFile(filePath, JSON.stringify(heroesFile, null, 2));

    res.status(201).json(newHero);
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error,
    });
  }
});

export default router;
