const form = document.getElementById('form');
const button = document.getElementById('buttonEnviar');

button.addEventListener('click', (event) => {
  event.preventDefault();
  for (let index = 0; index < form.length; index += 1) {
      // console.log(form[index].checked);
      if (form[index].name === 'flexRadioDefault' && !form[index].checked) {
        continue
      }
      console.log(form[index].tag);

  }
})

