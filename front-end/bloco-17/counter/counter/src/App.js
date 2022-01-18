import { useState, useEffect } from 'react';

const App = () => {
  const [ counter, setCounter ] = useState(0);
  const [ randomNumber, setRandomNumber ] = useState(0);
  const [ message, setMessage ] = useState('');
  useEffect(() => {
    const myInterval = setInterval(() => {
      setCounter(counter + 1);
      if(counter % 10 === 0 &&  counter >= 10) {
        setRandomNumber( parseInt(Math.random() * 100));
      }
      if (counter % 3 === 0 || counter % 5 === 0) {
        setMessage('Acerto!');
        setTimeout(() => {
          setMessage('');
        }, 4000);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    }
  })

  return (
    <div className="App">
        {
          `Contador: ${counter}
           Numero aleatório: ${randomNumber}
           ${message}
          `
        }
    </div>
  );
}

export default App;
