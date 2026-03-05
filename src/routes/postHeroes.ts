import { Router, Request, Response } from "express";
import heroes from "../data/ow2_heroes.json";
import { updateHeroSchema } from "../schemas/hero.schema";
import fs from "fs/promises";

const router = Router();

const filePath = "./src/data/ow2_heroes.json";

 

router.post("/addHero", async (req: Request, res: Response) => {
  try {
    const { name, role, description, health, abilities, ultimate, releaseDate } = req.body;

    const newHero = {
      id: heroes.length + 1,
      name,
      role,
      health,
      abilities,
      ultimate,
      releaseDate,
      description,
    };

    const validation = updateHeroSchema.safeParse(newHero);
    
    if (!validation.success) {
      return res.status(400).json({ 
        message: "Invalid hero data", 
        errors: validation.error 
      });
    }

    const file = await fs.readFile(filePath, "utf-8");
    const heroesFile = JSON.parse(file);

    heroesFile.push(newHero);


    await fs.writeFile(
    filePath,
    JSON.stringify(heroesFile, null, 2)
    );

    res.status(201).json(newHero);
  } catch (error) {
    return res.status(500).json({ 
      message: "Server error", 
      error 
    });
  }
});

export default router;
