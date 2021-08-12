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

// # Funções para resolução dos Exercícios
function createNewElement(element, elementContent, location) {

  if(Array.isArray(elementContent)){
    for (let index = 0; index < elementContent.length; index += 1) {
      const content = elementContent[index];
      const newElement = document.createElement(element);
      newElement.innerHTML = content;
      location.appendChild(newElement);
    }
  }else{
    const newElement = document.createElement(element);
    newElement.innerHTML = elementContent;
    location.appendChild(newElement);
  }
}

function newSelector (array, element, elementName){
  for (let index = 0; index < array.length; index += 1) {
    switch (elementName) {
      case 'holiday':
        element[array[index]].classList.add("holiday");
        break;

      case 'friday':
        element[array[index]].classList.add("friday");
        break;

      default:
        return 0;
        break;
    } 
  }
}

function changeBackgroundColor (eventElement, element, value, location){
  element.addEventListener(eventElement, () => {
    for (let index = 0; index < location.length; index += 1){
      location[index].style.backgroudColor = value;
    }
  })
}

// -----------------------------------------------------------------------

const dezDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const idDay = document.getElementById('days');
const li = document.getElementById('days').children;
const divButtons = document.querySelector('.buttons-container');
const classHoliday = document.getElementsByClassName('holiday');
let holidays = [25, 26, 32];
let fridays = [5, 12, 19, 26]

// #EX 1
createNewElement('li', dezDays, idDay, 'class', 'day');
newSelector(holidays, li, 'holiday');
newSelector(fridays, li, 'friday');
// #EX 2
createNewElement('button', 'Feriados', divButtons, 'id', 'btn-holiday');

// #EX 3
const holidayButton = divButtons.querySelector('button')
changeBackgroundColor('click', holidayButton, 'blue', classHoliday)
createDaysOfTheWeek();

// Escreva seu código abaixo.
