"use client";
import { Button, Skeleton } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SignOutButton() {
  const [isJWTPresent, setIsJWTPresent] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <Skeleton variant="rectangular" width={100} height={36} />
      ) : (
        isJWTPresent && (
          <Button variant="contained" color="primary" onClick={handleSignOut}>
            Sign Out
          </Button>
        )
      )}
    </>
  );
}
