import React from 'react';
import './App.css';
import ItemsList from './ItemsList';

function App() {

  const [colored, setColored] = React.useState(false);
  const [count, setCount] = React.useState(1);

  const styles = {
    color: colored ? 'red' : 'green'
  }
  // Каждый раз, когда меняется colored, то функция обновляется (новая ссылка и проп в лист) 
  // и компонент рендерится (ItemsList)  без необходимоссти. Нужно useCallBack
  // useCallBack возвращает сам CallBack
  const generateItemsFromAPI = React.useCallback(() => {
    return new Array(count).fill('').map((_, index) => `Элемент ${index + 1}`)
  }, [count])

  return (
    <>
      <h1 style={styles}>Количество елементов : {count}</h1>
      <button className="btn btn-success" onClick={() => setCount(prev => prev + 1)}>Добавить</button>
      <button className="btn btn-primary" onClick={() => setColored(prev => !prev)}>Изменить</button>
      <ItemsList getItems={generateItemsFromAPI}/>
    </>
  );
}

export default App;
