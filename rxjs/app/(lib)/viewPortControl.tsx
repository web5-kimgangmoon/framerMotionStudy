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
//       window.scrollY < ref.current!.offsetTop
//     )
//       setIsRunAnime(true);
//     if (boundary < ref.current!.offsetTop + 1) setIsRunAnime(false);
//   };

export const mkOnViewportEnter =
  (
    ref:
      | React.RefObject<HTMLDivElement | null>
      | React.RefObject<HTMLElement | null>,
    setIsRunAnime: (toggle: boolean) => void
  ) =>
  () => {
    const boundary = window.scrollY + window.innerHeight + 30;
    if (
      boundary > ref.current!.offsetTop &&
      boundary < ref.current!.offsetTop + ref.current!.offsetHeight + 1
    )
      setIsRunAnime(true);
  };

// export const mkOnViewportLeave =
//   (
//     ref:
//       | React.RefObject<HTMLDivElement | null>
//       | React.RefObject<HTMLElement | null>,
//     setIsRunAnime: (toggle: boolean) => void
//   ) =>
//   (isRunAnime: boolean) => {
//     const boundary = window.scrollY;
//     if (
//       boundary > ref.current!.offsetTop + ref.current!.scrollHeight + 1 &&
//       !isRunAnime
//       // 화면 나갈때, 브라우저 탑이 요소의 바텀보다 아래에 있다면
//     )
//       setIsRunAnime(true);
//     if (
//       boundary < ref.current!.offsetTop + ref.current!.scrollHeight - 1 &&
//       isRunAnime
//       // 화면 나갈때 브라우저의 탑이 요소의 바텀보다 위에 있다면
//     )
//       setIsRunAnime(false);
//   };

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
