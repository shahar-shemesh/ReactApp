import React, {useState, Component} from 'react'

export const Description = (props) => {	
	return (
		<input
            placeholder='Description'
            key='description'
            onChange={(descriptionCurrent) => props.onChange(descriptionCurrent.target.value)}
        />
	);
};
