import React from 'react';
import './App.css';

function useLogger(value){
  React.useEffect(() => {
    console.log('Value changed: ', value)
  }, [value])
}

function useInput(initialValue){
  const [value, setValue] = React.useState(initialValue);
  const onChange = (e) => setValue(e.target.value);
  const clear = () => setValue('');
  return {
    bind: {
      value, onChange
    },
    value,
    clear
  }
}

function App() {

  const input = useInput('');

  useLogger(input.value);

  return (
      <div className="container pt-3">
        <button onClick={input.clear} className="btn btn-danger">Очистить инпут</button>
          <hr />
          <input type="text" {...input.bind}/>
          <hr />
          <h2>{input.value}</h2>
      </div>
    
  );
}

export default App;
