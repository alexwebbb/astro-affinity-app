export default k => {
  let t0,
    t1 = k * 2 * Math.PI;

  // Solve for theta numerically.
  if (k > 0 && k < 1) {
    t1 = Math.pow(12 * k * Math.PI, 1 / 3);
    for (let i = 0; i < 10; ++i) {
      t0 = t1;
      t1 =
        (Math.sin(t0) - t0 * Math.cos(t0) + 2 * k * Math.PI) /
        (1 - Math.cos(t0));
    }
    k = (1 - Math.cos(t1 / 2)) / 2;
  }
  return k;
};