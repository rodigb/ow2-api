"use client";
import { Box, Button, TextField } from "@mui/material";
import Image from "next/image";
import React from "react";
import Snackbar from "@mui/material/Snackbar";
import { useRouter } from "next/navigation";
import LoadingDialog from "./loadingDialog";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [loading, setLoading] = React.useState(false);

  const [snackbar, setSnackbar] = React.useState<{
    open: boolean;
    message: string;
    type?: "success" | "error";
  }>({ open: false, message: "", type: undefined });

  const handleLogin = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      data.data?.token && localStorage.setItem("token", data.data.token);

      if (response.ok) {
      setSnackbar({
        open: true,
        message: "Login successful!",
        type: "success",
      });
      console.log("Login successful:", data);
      router.push("/dashboard");
      } else {
      setSnackbar({
        open: true,
        message: data.message || "Login failed!",
        type: "error",
      });
      }
    } catch (error) {
      setSnackbar({
      open: true,
      message: "An error occurred!",
      type: "error",
      });
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };
  if(loading) {
    return <LoadingDialog/>
  }
  return (
    <>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        message={snackbar.message}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 64px)",
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
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
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
    </>
  );
}
