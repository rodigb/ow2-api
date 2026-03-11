"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SignOutButton() {
  const [isJWTPresent, setIsJWTPresent] = useState(false);

  const router = useRouter();

  const handleSignOut = () => {
    if (!localStorage.getItem("token")) {
      router.push("/login");
      return;
    }
    localStorage.removeItem("token");
    router.push("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsJWTPresent(!!token);
  }, []);

  return (
    <Button variant="contained" color="error" onClick={handleSignOut}>
      {isJWTPresent ? "Sign Out" : "Sign In"}
    </Button>
  );
}
