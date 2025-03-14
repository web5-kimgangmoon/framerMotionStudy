export const upAnime_initial = { translateY: "30px", opacity: 0 };

export const upAnime_animate = (isRunAnime: boolean) => ({
  translateY: isRunAnime ? "0px" : "30px",
  opacity: isRunAnime ? 1 : 0,
});
