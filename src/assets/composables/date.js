export function formatted(date) {
  return new Date(date).toString().slice(0, 15);
}
