import React from 'react';
import './App.css';

function complexCompute(num){
  console.log('Функция вызывается при перерисовке компонента')
  let i = 0
  while (i < 100000000) i++
  return num * 2
}

function App() {

  const [number, setNumber] = React.useState(42);
  const [colored, setColored] = React.useState(false);
// Будет вызывать console.log('styles changed') только тогда, когда изменится colored, помнит старое значение (кеширует)
  const styles = React.useMemo(() => {
    return {
      color: colored ? 'red' : 'green'
    }
  }, [colored])
  // Если меняется number, то только тогда нужно проводить вычисление
  const computed = React.useMemo(() => complexCompute(number), [number])

  React.useEffect(() => {
    console.log('styles changed')
  }, [styles])

  return (
    <div>
      <h1 style={styles}>Вычисляемое свойство : {computed}</h1>
      <button className="btn btn-success" onClick={() => setNumber(prev => prev + 1)}>Добавить</button>
      <button className="btn btn-danger" onClick={() => setNumber(prev => prev - 1)}>Убрать</button>
      <button className="btn btn-primary" onClick={() => setColored(prev => !prev)}>Изменить</button>
    </div>
  );
}

export default App;
