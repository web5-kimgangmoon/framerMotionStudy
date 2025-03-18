import { useCallback, useEffect, useRef, useState } from "react";
import {
  mkOnViewportEnter,
  mkOnViewportLeave,
  mkOnViewportLeave_parent,
} from "../(lib)/viewPortControl";
import { motion } from "motion/react";
import { upAnime_animate, upAnime_initial } from "../(lib)/upAnime";

const AnimeWrapper_div = ({
  children,
  className,
  isTarget_parent,
  delay,
  duration,
}: {
  children: React.ReactNode | string;
  className?: string;
  isTarget_parent?: boolean;
  delay?: number;
  duration?: number;
}) => {
  const ref = useRef<null | HTMLDivElement>(null);
  const [isRunAnime, setIsRunAnime] = useState(false);

  const onViewportEnter = useCallback(mkOnViewportEnter(setIsRunAnime), [ref]);
  const onViewportLeave = useCallback(
    isTarget_parent
      ? mkOnViewportLeave_parent(ref, setIsRunAnime)
      : mkOnViewportLeave(ref, setIsRunAnime),
    [ref]
  );

  useEffect(() => {
    if (window.scrollY > ref.current!.offsetTop) setIsRunAnime(true);
  }, []);

  return (
    <motion.div
      className={className}
      initial={upAnime_initial}
      animate={upAnime_animate(isRunAnime)}
      onViewportEnter={onViewportEnter}
      onViewportLeave={() => onViewportLeave(isRunAnime)}
      transition={{
        delay: isRunAnime ? delay : 0,
        duration: isRunAnime ? duration : 0,
      }}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};

export default AnimeWrapper_div;
