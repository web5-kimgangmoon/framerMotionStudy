// export const mkOnViewportEnter =
//   (
//     ref:
//       | React.RefObject<HTMLDivElement | null>
//       | React.RefObject<HTMLElement | null>,
//     setIsRunAnime: (toggle: boolean) => void
//   ) =>
//   () => {
//     const boundary = window.scrollY + window.innerHeight + 30;
//     if (
//       boundary > ref.current!.offsetTop &&
//       boundary < ref.current!.offsetTop + ref.current!.offsetHeight + 1
//     )
//       setIsRunAnime(true);
//   };

export const mkOnViewportEnter =
  (setIsRunAnime: (toggle: boolean) => void) => () => {
    setIsRunAnime(true);
  };

export const mkOnViewportLeave =
  (
    ref:
      | React.RefObject<HTMLDivElement | null>
      | React.RefObject<HTMLElement | null>,
    setIsRunAnime: (toggle: boolean) => void
  ) =>
  (isRunAnime: boolean) => {
    const boundary = window.scrollY + window.innerHeight;
    if (boundary < ref.current!.offsetTop && isRunAnime) setIsRunAnime(false);
  };

export const mkOnViewportLeave_parent =
  (
    ref:
      | React.RefObject<HTMLDivElement | null>
      | React.RefObject<HTMLElement | null>,
    setIsRunAnime: (toggle: boolean) => void
  ) =>
  (isRunAnime: boolean) => {
    const boundary = window.scrollY + window.innerHeight;
    const parent = ref.current!.parentElement!.offsetTop;
    const target = ref.current!.offsetTop;
    if (boundary < parent + target && isRunAnime) setIsRunAnime(false);
  };
