"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SignOutButton from "./signOutButton";
import ow2Logo from "../../public/ow_logo.png";
import ow2TextLogo from "../../public/ow_text_logo.svg";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavigationBar() {
  const pathname = usePathname();

  return (
    <AppBar position="fixed" color="default" elevation={1} sx={{ height: 64 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Image src={ow2TextLogo} alt="Overwatch" height={64} width={128} />
          <Image src={ow2Logo} alt="Overwatch" height={36} width={36} />
        </Box>
        {pathname !== "/login" && <SignOutButton />}
      </Toolbar>
    </AppBar>
  );
}
