import React from 'react'

export const Cost = (props) => {
	return (
		<input
            placeholder='Cost'
            type='number'
            key='cost'
            onChange={(currentCost) => props.onChange(currentCost.target.value)}
        />
	);
};