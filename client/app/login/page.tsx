"use client";
import { Box, Button, TextField } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function LoginPage() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Login successful:", data);
    } else {
      console.error("Login failed:", data);
    }
  };
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
        <Box sx={{width: "100%", display: "flex", justifyContent: "center"}}>
          <Image
            src="/ow_logo.png"
            alt="Overwatch Logo"
            width={100}
            height={100}
            style={{ marginBottom: "2rem" }}
          />
        </Box>
        <TextField
          label="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={() => handleLogin({ username, password })}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}
