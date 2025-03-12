"use client";

import { useRef } from "react";
import { TestComp } from "./ui/bodySection";
import Header from "./ui/header";
import SmoothScroll from "./ui/horizontalScroll";

export default function Home() {
  const ref = useRef<null | HTMLDivElement>(null);
  return (
    <div className="relative">
      <Header />
      <div className="pt-48 bg-red-400"></div>
      <div className="sticky top-0 left-0 bg-rose-600 w-full h-[5rem] z-10"></div>
      <SmoothScroll />

      <div className="w-full min-h-[40rem] bg-black flex justify-center">
        <TestComp />
      </div>
      <div className="w-full h-[40rem] bg-blue-500"></div>
      <div className="w-full h-[40rem] bg-green-500"></div>
    </div>
  );
}
