import './App.css';
import {Header} from './components/Header';
import {AddItem} from './components/AddItem';
import {Clock} from './components/Clock';
import { Component, useEffect, useState } from 'react';
import Exception from './components/Exception';
import { useLocalStorage } from "./hooks/useLocalStorage";
import { ItemList } from './components/ItemsList';
import { ReactDOM } from 'react';


export default function App() {
  // useLocalStorage is a custom hook that returns an array with three values:
  // the current value of the localStorage item, a function to update the localStorage item, and a function to clean the localStorage item
  const [items, setItems, clean] = useLocalStorage('myData', []);

  // handler function that receives a new item and updates the list of items
  const handleNewItem = (item) => {
    setItems(prevItem => { 
      // the new item is added to the beginning of the previous list of items
      return [item, ...prevItem];
    });
  };

  // handler function that clears the localStorage item
  const handleClean = (event) => {
    clean();
  };

  return (
    <div className="App">
      <Exception>
          <Header/>
          
          <AddItem onNewItem={handleNewItem} cleanStorage={handleClean}/>
          <ItemList items={items}/>

          <Clock/>
      </Exception>
    </div>
  );
};
