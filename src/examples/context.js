import React from 'react';
import Alert from './Alert/Alert';
import { AlertProvider } from './Alert/AlertContext';
import './App.css';
import ContexExamleComponent from './ContexExamleComponent';

function App() {

  return (
    <AlertProvider>
      <div className="container pt-3">
        <Alert />
        <ContexExamleComponent />
      </div>
    </AlertProvider>
    
  );
}

export default App;