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

export const trainers = [
  createTrainers(
    "Карина Грищенко",
    "0.jpg",
    "2016 «Витебский государственный университет имени П.М.Машерова», факультет физической культуры и спорта, по специальности и специализации «Физическая культура. Физкультурно-оздоровительная и туристско-рекреационная деятельность»<br>2016 семинар WELLCOM Wellness Company «Функциональная анатомия ОДА. Туловище»<br>2016 семинар WELLCOM Wellness Company «Миофасциальное расслабление. Туловище. ПРАКТИКУМ»<br>2017 семинар «Гибкость с тренажером Бизон»<br>2019 семина&nbsp;WELLCOM Wellness Company «Восстановление функций грудной клетки»<br>Мастер спорта шорт-треку<br>Участвовала в составе сборной Республики Беларусь в: Чемпионате Республики Беларусь, Чемпионате Европы, Кубке мира, Европейских кубках"
  ),
  createTrainers(
    "Карина Грищенко",
    "1.jpg",
    "Закончил Московскую государственную академию физкультуры и спорта (МГАФК) ТиМ бокс<br>Колледж Вейдера по направлению персональные тренер тренажерного зала <br>КМС по боксу <br> Не отднократный победитель районных областных Всероссийским турниров и участник международных турниров по боксу"
  ),
  createTrainers("Андрей Меркулов", "2.jpg", "У меня диплом Московская школа фитнеса MFS персональный тренер тренажерного зала"),
  createTrainers("Александр Гладков", "3.jpg", "Диплом Московская школа фитнеса MFS персональный тренер тренажерного зала"),
  createTrainers(
    "Дарья Круглякова",
    "4.jpg",
    "Персональный тренер и тренер групповых занятий по FULL BODY. Более 7 лет работы с клиентами. Консультации по питанию, подбору тренировочного процесса, индивидуальный подход к каждому клиенту.  Медицинское образование позволяет корректировать процесс тренировки и питания, с пользой для клиентов с ограничениями или имеющими проблемы со здоровьем.Достижения : чемпион Всероссийских соревнований по лёгкой атлетике, призёр ЮФО , чемпион России среди мединских работников по ГТО,  КМС по пауэрлифтингу, призёр по ББ в номинации боди-фитнес.  И ПРОСТО ХОРОШИЙ ЧЕЛОВЕК😁👍"
  ),
  createTrainers(
    "Кирилл Петровицкий",
    "5.jpg",
    "Персональный тренер. Высшее спортивное образование Центральный Институт Физической Культуры и Спорта, Колледж фитнеса и бодибилдинга им. Бена Вейдера, мастер спорта по дзюдо, КМС по лёгкой атлетике и лыжным гонкам. Специализация: коррекция фигуры (снижение жировой массы, набор мышечной массы), восстановление и реабилитация, функциональный и силовой тренинг, составление индивидуальных программ, тренировок, консультация по питанию. Личный стаж тренировок более 40 лет."
  ),
];

export const training = [
  {
    workout: "Персональные треннировки",
    items: [
      { name: "1 тренировка", price: 1500 },
      { name: "4 тренировки (месяц)", price: 5500 },
      { name: "8 тренировок (месяц)", price: 9500 },
      { name: "12 тренировок (1.5 месяца)", price: 12500 },
    ],
  },
  {
    workout: "Занятия в мини-группах с тренером",
    items: [
      { name: "4 тренировки (месяц)", price: 5000 },
      { name: "8 тренировок (месяц)", price: 8000 },
      { name: "12 тренировок (месяц)", price: 9500 },
    ],
  },
  {
    workout: "Детские персональные (до 14 лет)",
    items: [
      { name: "1 тренировка", price: 1500 },
      { name: "4 тренировки (месяц)", price: 4500 },
      { name: "8 тренировок (месяц)", price: 6000 },
      { name: "12 тренировок (месяц)", price: 9000 },
    ],
  },
  {
    workout: "Детские тренировки в мини-группах (до 14 лет)",
    items: [
      { name: "8 тренировок (месяц)", price: 6000 },
      { name: "12 тренировок (месяц)", price: 7500 },
    ],
  },
  {
    workout: "Групповые занятия Full-Body",
    items: [
      { name: "1 тренировка", price: 1000 },
      { name: "4 тренировки", price: 3800 },
      { name: "8 тренировок", price: 7200 },
      { name: "12 тренировок", price: 8400 },
    ],
  },
  {
    workout: "Групповые тренировки по боксу (месяц)",
    items: [
      { name: "Дети (5+) 10 тренировок", price: 4000 },
      { name: "Дети (8+) 10 тренировок", price: 4000 },
      { name: "Дети (14+) 10 тренировок", price: 4000 },
    ],
  },
  {
    workout: "Персональные тренировки Сергея Лысенко",
    items: [
      { name: "1 тренировка", price: 2000 },
      { name: "5 тренировок", price: 9500 },
      { name: "10 тренировок", price: 18000 },
      { name: "Разовое посещение в группе", price: 500 },
    ],
  },
];

function createPrice(name, comment, price, status = null) {
  return { name, comment, price, status };
}
function createTrainers(name = "Иван Иванов", src = "0.jpg", description = "Персональный тренер") {
  return {
    name,
    src,
    description,
  };
}
