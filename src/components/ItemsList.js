import React, { useRef,useState } from 'react'
import { Item } from "./Item";
import FilterData from './FilterData';
import {checkbox} from './checkbox.css'

export const ItemList = (props) => {
    const [checked, setChecked] = useState(false); // state to toggle filter visibility
    const [filterMonth, setFilterMonth] = useState(null); // state to hold filter month
    const [filterYear, setFilterYear] = useState(null); // state to hold filter year
    const [isFilterMonth, setIsFilterMonth] = useState(false); // state to show if there is a filter by month
    const [isFilterYear, setIsFilterYear] = useState(false); // state to show if there is a filter by year

    // function to toggle filter visibility
    const handleChange = () => {
        setChecked(!checked);
    };

    // function to add filter by month
    const addFilterByMonth = (monthFilter)=>{
        if(monthFilter!= null){
            setFilterMonth(monthFilter);
            setIsFilterMonth(true);
            setIsFilterYear(false);
            setChecked(false);
        };
    };

    // function to add filter by year
    const addFilterByYear = (yearFilter) => {
        if(yearFilter!= null){
            setFilterYear(yearFilter);
            setIsFilterYear(true);
            setIsFilterMonth(false);
            setChecked(false);
        }
        else{
            setChecked(false);
        };
    };

    // filter data based on current filter settings
    const filterData = props.items.filter(item => {
        if(isFilterMonth){
            return item.declarationMonth == filterMonth;
        }
        else{
            return item.declarationYear == filterYear;
        }
    });

    return(
        <div>
            <div id='element1' >
                <h3>Filter Data</h3>
                <input type="checkbox" id="switch" onChange={handleChange}/><label htmlFor="switch">Toggle</label>
            </div>

            <ul id='list' className='list'>
                {checked ? <FilterData addFilterByMonth={addFilterByMonth} addFilterByYear={addFilterByYear}/> : ' '}

                {isFilterMonth ? <h2> Filter By Month {filterMonth}</h2> : ''}
                {isFilterYear ? <h2> Filter By Year {filterYear}</h2> : ''}

                {!isFilterMonth && !isFilterYear?<h2>Costs you added:</h2>: '' }

                {isFilterMonth || isFilterYear ?
                    filterData.map(item => { return( <Item key={item.id} item={item}/>); }) :
                    props.items.map((item) => { return( <Item key={item.id} item={item}/> ); })
                }
            </ul>
        </div>
    );
};
