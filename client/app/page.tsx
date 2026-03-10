"use client";

import HomePage from "./home/page";
import { useRouter } from "next/navigation";


export default function Home() {

  const router = useRouter();
  router.push("/home");

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      
    </div>
  );
}
