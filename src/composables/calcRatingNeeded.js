export default function calcRatingNeeded(points, mult = 1) {
  if (!points || !mult) return 0;

  const y = points / mult / 1.5;

  if (y <= 475) return 0;

  const inside = (1176.94 / (y - 475) - 1) / 2500000;

  if (inside <= 0) return 0;

  const rating = -Math.log(inside) / 0.009;

  return rating;
}
