createDaysOfTheWeek = () => {
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
createNewElement = (element, elementContent, location) => {

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

newSelector = (array, element, selector, selectorName) => {
  if(Array.isArray(array)){
    for (let index = 0; index < array.length; index += 1) {
      switch (selector) {
        case 'id':
          element[array[index]].setAttribute(selector, selectorName); 
          break;
  
        case 'class':
          element[array[index]].classList.add(selectorName);
          break;
  
        default:
          return 0;
          break;
      } 
    }
  }else{
    switch (selector) {
      case 'id':
        element.setAttribute(selector, selectorName); 
        break;

      case 'class':
        element.classList.add(selectorName);
        break;
      default:
        return 0;
        break;
    }
  }
}

changeBackgroundColor = (eventElement, element, value, location) => {
  element.addEventListener(eventElement, () => {
    for (let index = 0; index < location.length; index += 1){
      location[index].style.backgroundColor = value;
    }
  })
}

// -----------------------------------------------------------------------
createDaysOfTheWeek();

// #EX 1
const dezDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const idDay = document.getElementById('days');
const li = document.getElementById('days').children;
const classHoliday = document.getElementsByClassName('holiday');
let holidays = [25, 26, 32];
let fridays = [5, 12, 19, 26]
createNewElement('li', dezDays, idDay);
newSelector(holidays, li,'class', 'holiday');
newSelector(fridays, li, 'class','friday');

// #EX 2
const divButtons = document.querySelector('.buttons-container');
createNewElement('button', 'Feriados', divButtons);
const fridayButton = divButtons.firstElementChild; 
newSelector(0 , fridayButton, 'id', 'friday');

// #EX 3
const holidayButton = divButtons.firstElementChild;
changeBackgroundColor('click', holidayButton, 'blue', classHoliday);
newSelector(0, holidayButton, 'id', 'btn-holiday')

// #EX 4
createNewElement('button', 'Sexta-Feira', divButtons);
// const fridayButton = 1;
newSelector(0, fridayButton.nextElementSibling, 'id', 'btn-friday')


// Escreva seu código abaixo.
