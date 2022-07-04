window.addEventListener('load', loadApp)

function loadApp() {
  createDaysOfTheWeek();
  createDays();
  createButtonHoliday('Feriados');
  holidayToggle();
  createButtonFriday('Sexta-Feira');
}

function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

function createDays() {
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let daysContainer = document.getElementById('days');
  for (let day of decemberDaysList) {
    let dayLi = document.createElement('li');
    dayLi.innerText = day;
    if (day == 4 || day == 11 || day == 18) {
      dayLi.setAttribute('class', 'day friday');
    }
    if (day == 25) {
      dayLi.setAttribute('class', 'day holiday friday');
    }
    daysContainer.appendChild(dayLi);
  }
}

function createButtonHoliday(label) {
  const btn = document.createElement('button');
  btn.setAttribute('type', 'button');
  btn.setAttribute('id', 'btn-holiday');
  btn.innerText = label
  const buttonContainer = document.querySelector('.buttons-container');
  buttonContainer.appendChild(btn);
}

function holidayToggle() {
  const btnHoliday = document.querySelector('#btn-holiday');
  btnHoliday.addEventListener('click', function (e) {
    const days = document.querySelectorAll('#days .day');
    for (let day of days) {
      if (day.innerText == 25) day.classList.toggle('holiday');
    }
  });
}

function createButtonFriday(label){
  const btn = document.createElement('button');
  btn.setAttribute('id','btn-friday');
  btn.innerText = label;

  document.querySelector('.buttons-container').appendChild(btn);
}

