const createTrainers = (name = "Иван Иванов", src = "0.jpg", description = "Персональный тренер") => ({ name, src, description });
const trainers = [
  createTrainers(
    "Карина Грищенко",
    "0.jpg",
    "<p>2016 «Витебский государственный университет имени П.М.Машерова», факультет физической культуры и спорта, по специальности и специализации «Физическая культура. Физкультурно-оздоровительная и туристско-рекреационная деятельность»<br>2016 семинар WELLCOM Wellness Company «Функциональная анатомия ОДА. Туловище»<br>2016 семинар WELLCOM Wellness Company «Миофасциальное расслабление. Туловище. ПРАКТИКУМ»<br>2017 семинар «Гибкость с тренажером Бизон»<br>2019 семина&nbsp;WELLCOM Wellness Company «Восстановление функций грудной клетки»<br>Мастер спорта шорт-треку<br>Участвовала в составе сборной Республики Беларусь в: Чемпионате Республики Беларусь, Чемпионате Европы, Кубке мира, Европейских кубках</p>"
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
    <img src="./assets/trainers/${trainer.src}" alt="" srcset="" />
    <h3>${trainer.name}</h3>
    <buttun class="cbtn small">Запись</buttun>
  </div></div>`
  );
}
const showTrainderCard = (name) => {
  console.log(trainers.find((trainer) => trainer.name == name));
};
