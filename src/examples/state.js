import React from 'react';
import './App.css';

function computeInitialCounter(){
  console.log('Some calculations...')
  return Math.trunc(Math.random() * 20)
}

function App() {

  // const [counter, setCounter] = React.useState(0);
  // const [counter, setCounter] = React.useState(computeInitialCounter()); - несколько рендеров
  const [counter, setCounter] = React.useState(() => {
    return computeInitialCounter()
  });

  const [state, setState] = React.useState({
    title: 'Counter',
    date: Date.now()
  })

  const Increment = () => {
    //----- Не прибавит 2, так как после первого setCounter произойдет ререндер -------
    // setCounter(counter + 1)
    // setCounter(counter + 1)

    // ----- Используя prevState, всегда отталкивается от предидущего, по нажатию увеличение на 3 ----
    // setCounter((prevCounter) => {
    //   return prevCounter + 1
    // })

    // setCounter(prev => prev + 2)
    // ---- В качестве state используется функция, которая что-то возвращает


  }

  const Decrement = () => {
    if(counter <= 1) return
    setCounter(counter - 1)
  }

  const updateTitle = () => {
    setState(prev => {
      return {
        ...prev,
        title: "New Title"
      }
    })
  }

  return (
    <div>
      <h1>COUNTER : {counter}</h1>
      <button className="btn btn-danger" onClick={Decrement}>Decrement</button>
      <button className="btn btn-success" onClick={Increment}>Increment</button>
      <button className="btn btn-primary" onClick={updateTitle}>Change title</button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
