export interface Hero {
  name: string;
  role: string;
  location: string;
  portrait: string; 
  health: {
    hp: number;
    armor: number;
    shields: number;
    total: number;
  };
  }