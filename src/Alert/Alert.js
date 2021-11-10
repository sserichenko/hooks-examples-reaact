import React from 'react';
import { useAlert } from "./AlertContext"

const Alert = () => {

    const { visible, hide, text } = useAlert()
    
    if(!visible) return null

    return (
        <div onClick={hide} className="alert alert-success">
            {text}
        </div>
    );
};

export default Alert;