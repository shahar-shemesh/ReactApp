import React, {Component, useState} from 'react'
import { v4 as uuid } from 'uuid';
import ItemForm from './ItemForm';


export const AddItem = (props) => { 
    // Set initial state for message
    const [message, setMessage] = useState("");

    // Callback function for creating a new item
    const onBuildNewItem = (pieceOfItemData) => {
        props.onNewItem(pieceOfItemData); // Calls the parent component's `onNewItem` function
        setMessage("Item saved successfully!"); 
    };

    // Function to handle clean storage button click event
    const handleClean = (event)=> {
        props.cleanStorage(); 
        setMessage("Storage clean successfully!"); 
    };

    return(
        <>
            <ItemForm onBuildNewItem={onBuildNewItem} />
            <button onClick={handleClean}>Clean</button>
            {message && <div className='message'>{message}</div>}
        </>
    );
};


