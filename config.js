export const prices = {
  unlimited: [
    createPrice("1 день", "Разовый", "400 р.", false),
    createPrice("1 месяц", "Безлимит", "3 000 р."),
    createPrice("3 месяца", "Безлимит", "7 000 р."),
    createPrice("6 месяцев", "Безлимит", "9 000 р."),
    createPrice("12 месяцев", "Безлимит", "14 000 р.", "pro"),
  ],
  daytime: [
    createPrice("1 месяц", "c 8:00 до 16:00", "2 000 р."),
    createPrice("3 месяца", "c 8:00 до 16:00", "4 000 р."),
    createPrice("6 месяцев", "c 8:00 до 16:00", "6 500 р."),
    createPrice("12 месяцев", "c 8:00 до 16:00", "8 000 р.", "pro"),
  ],
  childlike: [
    createPrice("Льготный", "Детский (до 18 лет)", "Скидка 25%", "discount"),
    createPrice("1 день", "Детский (до 14 лет)", "200 р.", false),
    createPrice("1 месяц", "Детский (до 14 лет)", "2 000 р."),
    createPrice("3 месяца", "Детский (до 14 лет)", "6 000 р."),
    createPrice("6 месяцев", "Детский (до 14 лет)", "8 000 р."),
    createPrice("12 месяцев", "Детский (до 14 лет)", "12 000 р.", "pro"),
  ],
};
function createPrice(name, comment, price, status = null) {
  return { name, comment, price, status };
}
