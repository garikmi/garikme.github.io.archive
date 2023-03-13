export function formatDate(date) {
  const newDate = new Date(date);
  newDate.setHours(newDate.getHours() + 24);

  return newDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function substractDate(a, b) {
  a = new Date(a);
  a.setHours(a.getHours() + 24);

  b = new Date(b);
  b.setHours(b.getHours() + 24);

  return b - a;
}

export function currentYear() {
  return new Date().toLocaleDateString("en-US", {
    year: "numeric",
  });
}

export function countWords(val) {
  return val.split(" ").length;
}
