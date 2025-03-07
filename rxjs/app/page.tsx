"use client";

import Header from "./ui/header";
import SmoothScroll from "./ui/horizontalScroll";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="pt-48 bg-red-400"></div>

      <SmoothScroll />

      <div className="w-full h-[40rem] bg-red-500"></div>
      <div className="w-full h-[40rem] bg-blue-500"></div>
      <div className="w-full h-[40rem] bg-green-500"></div>
    </div>
  );
}
