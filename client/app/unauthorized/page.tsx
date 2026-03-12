"use client";

import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function UnauthorizedPage() {

  const [validPath, setValidPath] = useState(false);

    const pathname = usePathname();

    useEffect(() => {
      const validPaths = process.env.NEXT_PUBLIC_VALID_PATHS?.split(",") || [];

      console.log(validPaths)
      if (!validPaths.includes(pathname)) {
        console.log(`Invalid path: ${pathname}. Redirecting to /unauthorized.`);
        setValidPath(false);
      } else {
        setValidPath(true);
      }
     }, [pathname]);

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 2,
          maxWidth: 560,
        }}
      >
        <Image
          src="/ow_logo.png"
          alt="Overwatch logo"
          width={100}
          height={100}
          priority
        />
        <Typography variant="h4" fontWeight={700}>
          Unauthorized Access
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {!validPath
            ? "The page you are trying to access does not exist."
            : "You do not have permission to view this page. Please log in to access the dashboard."}
        </Typography>
        <Button variant="contained" color="primary" href="/login">
          Go to Login
        </Button>
      </Box>
    </Box>
  );
}
