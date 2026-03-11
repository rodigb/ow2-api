import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import HeroesRow from "./heroesTable.row";
import { useEffect, useState } from "react";
import { Hero } from "./types";

export default function HeroesTable() {

    const [heroes, setHeroes] = useState<Hero[]>([]);

  const getHeroes = async () => {
    const jwt = localStorage.getItem("token");

    const response = await fetch("http://localhost:5000/heroes", {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    const data = await response.json();

    return data;
  };

  useEffect(() => {
    getHeroes().then((data) => setHeroes(data));
  }, []);

  return (
    <TableContainer component={Paper} elevation={2}>
      <Table aria-label="heroes table">
        <TableHead sx={{ height: 16 }}>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Location</TableCell>
            <TableCell align="right">Health</TableCell>
            <TableCell align="right">Armor</TableCell>
            <TableCell align="right">Shields</TableCell>
            <TableCell align="right">Total HP</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {heroes.length === 0 ? (
            <TableRow>
              <TableCell colSpan={8} align="center">
                <Typography variant="body2" color="text.secondary">
                  No heroes available yet.
                </Typography>
              </TableCell>
            </TableRow>
          ) : (
            heroes.map((hero) => (
              <HeroesRow key={hero.name} heroObject={hero} />
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
