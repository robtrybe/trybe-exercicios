window.addEventListener('load',loadApp)

function loadApp(){
  createDaysOfTheWeek();
  createDays();
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

  function createDays(){
    let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let daysContainer = document.getElementById('days');
    for(let i = 0;i < decemberDaysList.length ;i++){
        let day = document.createElement('li');
        day.innerText = decemberDaysList[i];
        daysContainer.appendChild(day);
    }
  }
  
