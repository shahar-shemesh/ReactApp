import '../App.css';
import React from "react";

export const Item = (props) => {
    // Extract the details of the item passed as props
    const {declarationMonth,declarationYear,category,description,cost}= props.item;

    // Return a list item element with the details of the item
    return (
        <li className='plus'>
            <ul><h2>{description}</h2></ul>
            <ul><h3>{category}</h3></ul>
            <ul><h3>{declarationMonth + '/' + declarationYear}</h3></ul> 
            <ul><h3>{cost}</h3></ul>
        </li>
    )
};








