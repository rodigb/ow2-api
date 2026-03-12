"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function AuthGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    setIsAllowed(false);

    const token = localStorage.getItem("token");
    const isPublicRoute = pathname === "/login" || pathname === "/unauthorized";
    const isLandingRoute = pathname === "/";

    if (!token && !isPublicRoute) {
      router.replace("/unauthorized");
      return;
    }

    if (token && (isPublicRoute || isLandingRoute)) {
      router.replace("/dashboard");
      return;
    }

    setIsAllowed(true);
  }, [pathname, router]);

  if (!isAllowed) {
    return null;
  }

  return <>{children}</>;
}