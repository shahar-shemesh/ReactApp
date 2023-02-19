import React, {Component, useState} from 'react'
import {Categories} from './Categories'
import { v4 as uuid } from 'uuid';
import { Description } from './Description';
import { Cost } from './Cost';

const ItemForm = (props) => {
    // Define state variables for the item form
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [cost, setCost] = useState('');
    const [declarationMonth, setDeclarationMonth] = useState('');
    const [declarationYear, setDeclarationYear] = useState('');
    const [id, setId] = useState('');
  
    // Define a function to handle form submission
    const handleSubmit = (event) => {
      // Prevent the default form submission behavior
      event.preventDefault();
      
      // Build a piece of item data using the form values
      const pieceOfItemData = {
        description: description,
        category: category,
        cost: cost,
        declarationMonth: (new Date().getMonth() + 1),
        declarationYear: (new Date().getFullYear()),
        id: uuid().slice(0,8),
      };
  
      // Pass the item data to the onBuildNewItem prop function
      props.onBuildNewItem(pieceOfItemData);
  
      // Clear the form values
      setDescription('') ;
      setCategory('');
      setCost('');
      setDeclarationMonth('');
      setDeclarationYear('');
  
      // Reset the form to its initial state
      event.target.reset();
    };
  
    // Render the form with the appropriate inputs and button
    return(
      <form className='form-control' onSubmit={handleSubmit}>
        <Description onChange={(currentDescription) => setDescription(currentDescription)}/>
        <Categories onChange={(currentCategory) => setCategory(currentCategory)} />
        <Cost onChange={(currentCost) => setCost(currentCost)} />
        <button type='submit'>Add Cost</button>
      </form>
    );
  };
  
  export default ItemForm;
  