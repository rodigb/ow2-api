"use client";

import {
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default function HeroesTableSkeleton({ rows = 6 }: { rows?: number }) {
  return (
    <TableContainer
      component={Paper}
      elevation={2}
      sx={{ maxWidth: 700, margin: "0 auto" }}
    >
      <Table aria-label="heroes table skeleton">
        <TableHead>
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
          {Array.from({ length: rows }).map((_, index) => (
            <TableRow key={index}>
              <TableCell>
                <Skeleton variant="rounded" width={48} height={48} />
              </TableCell>
              <TableCell>
                <Skeleton variant="text" width={120} />
              </TableCell>
              <TableCell>
                <Skeleton variant="text" width={80} />
              </TableCell>
              <TableCell>
                <Skeleton variant="text" width={110} />
              </TableCell>
              <TableCell align="right">
                <Skeleton variant="text" width={40} sx={{ ml: "auto" }} />
              </TableCell>
              <TableCell align="right">
                <Skeleton variant="text" width={40} sx={{ ml: "auto" }} />
              </TableCell>
              <TableCell align="right">
                <Skeleton variant="text" width={40} sx={{ ml: "auto" }} />
              </TableCell>
              <TableCell align="right">
                <Skeleton variant="text" width={56} sx={{ ml: "auto" }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
