export default function numberToStars(num) {
  const rounded = Math.round(num);
  return "★".repeat(rounded) + "☆".repeat(5 - rounded);
}
