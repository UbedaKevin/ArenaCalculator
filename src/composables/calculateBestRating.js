export default function calcPoints(rating, mult = 1) {
  if (!rating) return 0;

  const base = ((1651.94 - 475) / (1 + 2500000 * Math.exp(-0.009 * rating)) + 475) * 1.5;

  return Math.round(base * mult);
}
