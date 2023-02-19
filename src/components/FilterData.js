import React, { useRef,useState } from 'react'
import {checkbox} from './checkbox.css'

export default function FilterData(props) {
    // create references to the input fields
    const filterByMonthRef = useRef();
    const filterByYearRef = useRef();
  
    // filter data by month value
    const filterBtnMonth = async () =>{
      let param = 0;
      // get value from input field
      if(filterByMonthRef!= null){
        param=filterByMonthRef.current.value;
        // call parent component function to filter data
        await props.addFilterByMonth(param);
      };
    };
  
    // filter data by year value
    const filterBtnYear = async() =>{
      let param = 0;
      // get value from input field
      if(filterByYearRef!= null){
        param = filterByYearRef.current.value;
        // call parent component function to filter data
        await props.addFilterByYear(param);
      };
    };
  
    return (
      <div>
        <input type="text" placeholder='Enter Month Value' ref = {filterByMonthRef}/>
        <button onClick = {filterBtnMonth}>Filter By Month</button>
        <input type = "text" placeholder = 'Enter Year Value' ref = {filterByYearRef}/>
        <button onClick = {filterBtnYear}>Filter By Year</button>
      </div>
    );
  };
  