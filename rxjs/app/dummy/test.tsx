import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
} from "motion/react";
import { useRef, useState } from "react";

export default function Test() {
  const { scrollY } = useScroll();
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewPortW] = useState(0);

  const ref = useRef<null | HTMLDivElement>(null);
  const inview = useInView(ref);

  const motionValue = useMotionValue(0);

  // const target = useTransform(() => {
  //   const y = scrollY.get();
  //   if (inview) {
  //     const previous = scrollY.getPrevious();
  //     return previous !== undefined ? previous - y : 0;
  //   }
  // });
  const target = useTransform(scrollY, [0, 1], [0, -scrollRange + viewportW]);
  useMotionValueEvent(scrollY, "change", () => {
    // console.log(target.get());
    // if (inview) {
    //   ref.current!.style.transform = `translate(${
    //     motionValue.get() + target.get()
    //   }px, ${-(motionValue.get() + target.get())}px)`;
    //   motionValue.set(motionValue.get() + target.get());
    //   console.log(ref.current!.style.transform);
    // }
  });
  return (
    <motion.div
      className="text-3xl bg-red-400"
      ref={ref}
      // animate={{ position: inview ? "fixed" : "static", top: 0, left: 0 }}
    >
      1234567891012345678910 1234567891012345678910 1234567891012345678910
      1234567891012345678910 1234567891012345678910 1234567891012345678910
      1234567891012345678910 1234567891012345678910 1234567891012345678910
      1234567891012345678910 1234567891012345678910 1234567891012345678910
      1234567891012345678910 1234567891012345678910 1234567891012345678910
      1234567891012345678910
    </motion.div>
  );
}
