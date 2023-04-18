import Image from "next/image";
import { Inter } from "next/font/google";

import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
        <Feed />
        {/* widgets */}
        {/* modal */}
      </main>
    </div>
  );
}
