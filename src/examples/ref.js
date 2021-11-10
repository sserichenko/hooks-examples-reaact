import React from 'react';
import './App.css';


function App() {

  // useRef - хранит состояние и не вызывет перерендеринга

  // const [renderCount, setRenderCount] = React.useState(1);
  const [value, setValue] = React.useState('initial');
  const renderCount = React.useRef(1);
  const inputRef = React.useRef(null);
  const prevValue = React.useRef('')

  React.useEffect(() => {
    renderCount.current++
  })

// Сначала запоминает value до рендера, и всегда отдает предидущее состояние, которое хранится в value

  React.useEffect(() => {
    prevValue.current = value
  },[value])


  // Установка фокуса на реф елемент
  const focus = () => inputRef.current.focus();
  

  return (
    <div>
      <h1>Количесво рендеров : {renderCount.current}</h1>
      <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value}/>
      <button className="btn btn-success" onClick={focus}>Add focus to input</button>
      <h3>Прошлое состояние : {prevValue.current}</h3>
    </div>
  );
}

export default App;
