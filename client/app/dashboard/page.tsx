"use client";
import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function DashboardPage() {
  const [heroes, setHeroes] = useState<any>(null);

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
  }, [])
  
  
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "300px",
        }}
      >
        {getHeroes()}
       
      </Box>
    </Box>
  );
}
