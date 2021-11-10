import React from 'react';
import './App.css';

function App() {

  const [type, setType] = React.useState('users');
  const [data, setData] = React.useState([]);
  const [pos, setPos] = React.useState({
    x: 0,
    y: 0
  })

  // React.useEffect(() => {
  //   console.log('render')
  // })

  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then(response => response.json())
    .then(json => {
      setData(json)
    })

    return () => {
      console.log(`type has been cleaned ${type}`)
    }

  },[type])

  const mouseMoveHandler = (event) => {
    setPos({x: event.clientX, y: event.clientY})
  }

  React.useEffect(() => {
    console.log('Component did mount')
    window.addEventListener('mousemove', mouseMoveHandler)
    // Удаляем слушатель (аналог ComponentWillUnmount())

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    }

  },[])


  return (
    <div>
      <h1>RESOURCE : {type}</h1>
      <button onClick={() => setType('users')} className="btn btn-primary">Users</button>
      <button onClick={() => setType('todos')} className="btn btn-secondary">Todo</button>
      <button onClick={() => setType('posts')} className="btn btn-danger">Posts</button>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  );
}

export default App;
