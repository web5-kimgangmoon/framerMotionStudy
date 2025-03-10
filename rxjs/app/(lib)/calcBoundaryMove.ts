const calcBoundaryMove = (current: number, next: number, max: number) => {
  const distance = Math.abs(current - next);
  if (distance > max / 2) {
    const maxDiff = max - current;
    let boundary;
    let boundary_diff;
    if (maxDiff > current) {
      boundary_diff = current + 1;
      boundary = 0;
    } else {
      boundary_diff = maxDiff + 1;
      boundary = max;
    }
    const boundary_diff_next = max - next > next ? next : max - next;

    const boundaryMove_distance = boundary_diff + boundary_diff_next;
    return boundaryMove_distance < distance ? boundary : -1;
  }
  return -1;
};
export default calcBoundaryMove;
