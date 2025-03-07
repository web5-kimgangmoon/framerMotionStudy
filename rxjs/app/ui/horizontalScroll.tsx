import React, { useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const SmoothScroll = () => {
  const scrollRef = useRef<null | HTMLDivElement>(null);
  const containerRef = useRef<null | HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // axis: "y",
    // offset: ["start end", "end end"],
  });

  useLayoutEffect(() => {
    if (scrollRef.current) {
      setScrollRange(scrollRef.current.scrollWidth);
    }
  }, [scrollRef.current]); // 전체 화면 길이 추적

  useLayoutEffect(() => {
    setViewportW(document.documentElement.clientWidth);
    const onResize = () => {
      setViewportW(document.documentElement.clientWidth);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []); // 화면 크기 추적

  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange - 80 + viewportW]
  );

  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);

  return (
    <div
      className="relative pt-[10vh] pb-[30vh]"
      ref={containerRef}
      style={{ height: scrollRange }}
    >
      <section className="sticky top-[10vh] left-0 border-[40px] border-green-300 bg-black h-[60vh] overflow-hidden">
        <motion.div
          className="flex border-yellow-300"
          ref={scrollRef}
          style={{ x: spring }}
        >
          <div className="h-[40vh] w-[700px] bg-blue-600 border-[30px] border-magenta-300 flex-none" />
          <div className="h-[40vh] w-[700px] bg-blue-600 border-[30px] border-magenta-300 flex-none" />
          <div className="h-[40vh] w-[700px] bg-blue-600 border-[30px] border-magenta-300 flex-none" />
          <div className="h-[40vh] w-[700px] bg-blue-600 border-[30px] border-magenta-300 flex-none" />
          <div className="h-[40vh] w-[700px] bg-blue-600 border-[30px] border-magenta-300 flex-none" />
        </motion.div>
      </section>
    </div>
  );
};

export default SmoothScroll;
