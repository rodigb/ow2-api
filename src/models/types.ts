export type Role = "tank" | "damage" | "support";

export interface Hero {
  id: string;
  name: string;
  role: Role;
  health: number;
  abilities: string[];
  ultimate: string;
  releaseDate: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  role: "admin" | "user";
}