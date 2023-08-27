export const prices = [
  createPrice("FIRST", "Первое посещение", "Бесплатно"),
  createPrice("1 день", "Разовое посещение", "300 р."),
  createPrice("1 месяц", "Абонемент", "2 000 р."),
  createPrice("3 месяца", "Абонемент", "4 000 р."),
  createPrice("6 месяцев", "Абонемент", "6 000 р.", true),
];
function createPrice(name, comment, price, status = null) {
  return { name, comment, price, status };
}
