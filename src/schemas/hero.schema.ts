import { z } from "zod";

export const createHeroSchema = z.object({
  name: z.string().min(1),
  role: z.enum(["tank", "damage", "support"]),
  health: z.number().positive(),
  abilities: z.array(z.string()).min(1),
  ultimate: z.string().min(1),
  releaseDate: z.string()
});

export const updateHeroSchema = createHeroSchema.partial();