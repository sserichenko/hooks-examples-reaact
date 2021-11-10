import React from 'react';
import { useAlert } from './Alert/AlertContext';

const ContexExamleComponent = () => {

    const { show } = useAlert()

    return (
        <>
            <h2>Привет в примере с Context</h2>
            <button onClick={() => show('Это текст из ContexExamleComponent.js')} className="btn btn-success">Показать Alert</button>
        </>
    );
};

export default ContexExamleComponent;