"use client";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import StopPage from "./unauthorized/page";

export default function Home() {
  const router = useRouter();

  const jwt = localStorage.getItem("token");

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {jwt ? (
        <StopPage />
      ) : (
        <Button onClick={() => router.push("/login")}>Go to Login</Button>
      )}
    </div>
  );
}
