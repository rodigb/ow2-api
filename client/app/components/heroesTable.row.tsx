import {
    TableCell, TableRow,
    Avatar
} from "@mui/material";

type Hero = {
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
};



export default function HeroesRow({ heroObject }: { heroObject: Hero }) {
  return (
    <>
      <TableRow key={heroObject.name} hover>
        <TableCell>
          <Avatar
            src={heroObject.portrait}
            alt={heroObject.name}
            variant="rounded"
            sx={{ width: 48, height: 48 }}
          />
        </TableCell>
        <TableCell>{heroObject.name}</TableCell>
        <TableCell>{heroObject.role}</TableCell>
        <TableCell>{heroObject.location}</TableCell>
        <TableCell align="right">{heroObject.health.hp}</TableCell>
        <TableCell align="right">{heroObject.health.armor}</TableCell>
        <TableCell align="right">{heroObject.health.shields}</TableCell>
        <TableCell align="right">{heroObject.health.total}</TableCell>
      </TableRow>
    </>
  );
}
