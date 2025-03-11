// const calcBoundaryMove = (
//   current: number,
//   next: number,
//   min: number,
//   max: number
// ) => {
//   const distance = Math.abs(current - next);
//   if (distance > (max - min + 1) / 2) {
//     const maxDiff = max - current;
//     const minDiff = current - min;
//     let isPlus;
//     let boundary_diff;
//     if (maxDiff > minDiff) {
//       boundary_diff = minDiff + 1;
//       isPlus = false;
//     } else {
//       boundary_diff = maxDiff + 1;
//       isPlus = true;
//     }
//     const boundary_diff_next = isPlus ? next - min : max - next;

//     const boundaryMove_distance = boundary_diff + boundary_diff_next;

//     return isPlus
//       ? [current + boundaryMove_distance, boundaryMove_distance]
//       : [current - boundaryMove_distance, boundaryMove_distance];
//   } else return [next, distance];
// };

const calcBoundaryMove = (
  current: number,
  next: number,
  min: number,
  max: number
) => {
  const gap = max - min + 1;
  const distance = Math.abs(current - next);

  return distance > gap / 2
    ? [
        [next, distance],
        [next - gap, Math.abs(current - (next - gap))],
        [next + gap, Math.abs(current - (next + gap))],
      ].sort((a, b) => {
        return a[1] - b[1];
      })[0]
    : [next, distance];
};
export default calcBoundaryMove;
