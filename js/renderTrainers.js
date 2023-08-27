const createTrainers = (name = "Иван Иванов", src = "0.jpg", description = "Персональный тренер") => ({ name, src, description });
const trainers = [
  createTrainers(
    "Карина Грищенко",
    "1.jpg",
    "<p>2016 «Витебский государственный университет имени П.М.Машерова», факультет физической культуры и спорта, по специальности и специализации «Физическая культура. Физкультурно-оздоровительная и туристско-рекреационная деятельность»<br>2016 семинар WELLCOM Wellness Company «Функциональная анатомия ОДА. Туловище»<br>2016 семинар WELLCOM Wellness Company «Миофасциальное расслабление. Туловище. ПРАКТИКУМ»<br>2017 семинар «Гибкость с тренажером Бизон»<br>2019 семина&nbsp;WELLCOM Wellness Company «Восстановление функций грудной клетки»<br>Мастер спорта шорт-треку<br>Участвовала в составе сборной Республики Беларусь в: Чемпионате Республики Беларусь, Чемпионате Европы, Кубке мира, Европейских кубках</p>"
  ),
  createTrainers("Андрей Меркулов", "2.jpg"),
  createTrainers("Александр Гладков", "3.jpg"),
  createTrainers("Дарья Круглякова", "4.jpg"),
  createTrainers(
    "Кирилл Петровицкий",
    "5.jpg",
    '<p>2018 Колледж фитнеса и бодибилдинга им. Бена Вейдера "Эргогенетика питания. Нутрицевтики"&nbsp;<br>2018 Колледж фитнеса и бодибилдинга им. Бена Вейдера "Эргогенетика питания. Базовый рацион"<br>2019 Колледж фитнеса и бодибилдинга им. Бена Вейдера "Специалист по энергетической диетологии"<br>2019 Колледж фитнеса и бодибилдинга им. Бена Вейдера "Инструктор фитнеса, бодибилдинга, оздоровительной физической культуры"<br>Дважды занимал 4 место на чемпионате МО по фитнесу и бодибилдингу в категории Men`s Physique (Пляжный бодибилдинг)</p>'
  ),
  createTrainers(
    "Владимир Самонин",
    "6.jpg",
    "<p>Мастер спорта по пауэрлифтингу федерации НАП<br>2012 Федерация НАП IPA Открытый чемпионат Евразии. 3 место Пауэрлифтинг б/э ДК<br>2013 Чемпионат России. 2 место Пауэрлифтинг б/э ДК<br>2013 Федерация НАП «Золотой Тигр 7». 2 место Пауэрлифтинг б/э ДК<br>2015 Федерация НАП «Золотой Тигр 9». 1 место Пауэрлифтинг б/э ДК<br>2016 Федерация WPC Открытый чемпионат Азии. 1 место Становая тяга б/э ДК&nbsp;<br>2019 Диплом о присвоении квалификации «Тренер-преподаватель» по программе «Тренерская работа в области фитнес-индустрии»</p>"
  ),
  createTrainers("Александр Фильчагин", "7.jpg"),
];

const boxTrainers = document.querySelector(".trainers-list");

for (const trainer of trainers) {
  boxTrainers.insertAdjacentHTML(
    "beforebegin",
    `<div class="modal fade modal-lg" id="modal${trainer.src.replace(".", "")}" tabindex="-1" aria-labelledby="modal${trainer.src.replace(".", "")}Label" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title fs-5" id="modal${trainer.src.replace(".", "")}Label">${trainer.name}</h3>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">${trainer.description} <input type="text" /></div>
      <div class="modal-footer">
      <a class="cbtn small">Записаться</a>
      </div>
    </div>
  </div>
</div>`
  );

  boxTrainers.insertAdjacentHTML(
    "beforeend",
    `<div><div class="trainers-list-item" data-bs-toggle="modal" data-bs-target="#modal${trainer.src.replace(".", "")}" onclick="showTrainderCard('${trainer.name}');">
    <img src="/assets/trainers/${trainer.src}" alt="" srcset="" />
    <h3>${trainer.name}</h3>
    <buttun class="cbtn small">Запись</buttun>
  </div></div>`
  );
}
const showTrainderCard = (name) => {
  console.log(trainers.find((trainer) => trainer.name == name));
};
