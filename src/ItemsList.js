import React, {useState, useEffect} from 'react';

const ItemsList = ({getItems}) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log('РЕНДЕР КОМПОНЕНТА')
        const newItems = getItems();
        setItems(newItems)
    },[getItems])

    return (
        <ul>
            {
                items.map((item, index) => <li key={index}>{item}</li>)
            }
        </ul>
    );
};

export default ItemsList;