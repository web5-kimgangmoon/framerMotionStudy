"use client";

import { useRef } from "react";
import { BodyComp_18, BodyComp_7, BodyComp_8 } from "./ui/bodySection";
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
      <BodyComp_7 />
      <BodyComp_8 />
      <BodyComp_18 />
    </div>
  );
}
