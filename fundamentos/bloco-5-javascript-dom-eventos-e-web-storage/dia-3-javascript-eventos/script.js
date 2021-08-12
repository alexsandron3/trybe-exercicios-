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

// # EX1
function createNewElement(element, arrayOfContent, location) {

  for (let index = 0; index < arrayOfContent.length; index += 1) {
    const content = arrayOfContent[index];
    const newElement = document.createElement(element);
    newElement.innerHTML = content;
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

// -----------------------------------------------------------------------

const dezDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const idDay = document.getElementById('days');
const li = document.getElementById('days').children;
let holidays = [25, 26, 32];
let fridays = [5, 12, 19, 26]
createNewElement('li', dezDays, idDay, 'class', 'day');
newSelector(holidays, li, 'holiday');
newSelector(fridays, li, 'friday');

createDaysOfTheWeek();

// Escreva seu código abaixo.
