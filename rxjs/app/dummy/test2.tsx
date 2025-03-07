import React, {
  useRef,
  useState,
  useLayoutEffect,
  useCallback,
  useEffect,
} from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const SmoothScroll = () => {
  const scrollRef = useRef<null | HTMLElement>(null);
  const ghostRef = useRef<null | HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);

  useLayoutEffect(() => {
    if (scrollRef.current) {
      setScrollRange(scrollRef.current.scrollWidth);
    }
  }, [scrollRef.current]); // 전체 화면 길이 추적

  const onResize = useCallback((entries: Array<ResizeObserverEntry>) => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width);
    }
  }, []); // resize 때마다 사용될 콜백함수

  useLayoutEffect(() => {
    // setViewportW(window.innerWidth);
    // window.addEventListener("resize", () => {
    //   setViewportW(window.innerWidth);
    // });
    // 윈도우 리사이즈 이벤트 추가 및, 처음에 window

    const resizeObserver = new ResizeObserver((entries) => onResize(entries)); // 옵저버 생성
    resizeObserver.observe(ghostRef.current!); // ghost 클래스 div의 넓이 추적(ghost 클래스의 길이는 100vw, 즉 화면의 길이), 상태변화 시마다 함수 실행
    return () => resizeObserver.disconnect();
  }, []);

  const { scrollYProgress } = useScroll();
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange - 80 + viewportW]
  );

  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);

  return (
    <>
      <div className="scroll-container">
        <motion.section
          ref={scrollRef}
          style={{ x: spring }}
          className="thumbnails-container"
        >
          <div className="thumbnails">
            <div className="thumbnail" />
            <div className="thumbnail" />
            <div className="thumbnail" />
            <div className="thumbnail" />
            <div className="thumbnail" />
            <div className="thumbnail" />
          </div>
        </motion.section>
      </div>
      <div ref={ghostRef} style={{ height: scrollRange }} className="ghost" />
    </>
  );
};

export default SmoothScroll;
