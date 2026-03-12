"use client";
import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import HeroesTable from "../components/heroesTable";

export default function DashboardPage() {

  const getHeroes = async () => {
    const jwt = localStorage.getItem("token");

    const response = await fetch("http://localhost:5000/heroes", {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    const data = await response.json();

    return <p>{JSON.stringify(data)}</p>;
  };
  useEffect(() => {
    getHeroes();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100vh - 64px",
        p:5
      }}
    >
      <HeroesTable />
    </Box>
  );
}
