import React, { useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";

const SmoothScroll = () => {
  const scrollRef = useRef<null | HTMLDivElement>(null);
  const ghostRef = useRef<null | HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);

  const { scrollYProgress, scrollY } = useScroll({
    target: ghostRef,
    // axis: "y",
    // offset: ["start end", "end end"],
  });
  const isInview = useInView(scrollRef);

  useLayoutEffect(() => {
    if (scrollRef.current) {
      setScrollRange(scrollRef.current.scrollWidth);
    }
  }, [scrollRef.current]); // 전체 화면 길이 추적

  useLayoutEffect(() => {
    setViewportW(window.innerWidth);
    const onResize = () => {
      setViewportW(window.innerWidth);
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", () => {
      console.log(scrollYProgress.get());
      console.log(isInview);
    });
    return window.removeEventListener("resize", onResize);
  }, []); // 화면 크기 추적

  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange - 80 + viewportW]
  );

  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);

  return (
    <>
      <div className="relative" ref={ghostRef} style={{ height: scrollRange }}>
        <section className="sticky top-0 left-0 border-[40px] border-green-300 bg-black">
          <div className="relative h-[40vh] overflow-hidden">
            <motion.div
              className="absolute flex border-yellow-300 top-0 left-0"
              ref={scrollRef}
              style={{ x: spring }}
            >
              <div className="h-[40vh] w-[700px] bg-blue-600 border-[15px] border-magenta-300" />
              <div className="h-[40vh] w-[700px] bg-blue-600 border-[15px] border-magenta-300" />
              <div className="h-[40vh] w-[700px] bg-blue-600 border-[15px] border-magenta-300" />
              <div className="h-[40vh] w-[700px] bg-blue-600 border-[15px] border-magenta-300" />
              <div className="h-[40vh] w-[700px] bg-blue-600 border-[15px] border-magenta-300" />
            </motion.div>
          </div>
        </section>
      </div>
      {/* <div
        className="bg-black"
        style={{ height: scrollRange }}
        ref={ghostRef}
      ></div> */}
    </>
  );
};

export default SmoothScroll;
