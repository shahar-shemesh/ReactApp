import React, {Component} from 'react'

// Define an array of category objects
export class Categories extends Component{
    categories = [
        {value:'', text: 'Choose..', disabled: true, hidden: true},
        {value:'food', text: 'Food'},
        {value:'drink', text: 'Drink'},
        {value:'hobbies', text: 'Hobbies'},
        {value:'other', text: 'Other'}
    ];
    
    constructor(props){
        super(props);

        // Set initial state with the selectedCategory key set to the value of the first category object
        this.state={
            selectedCategory: this.categories[0].value
            };

        // Bind the handleChange method to this component
        this.handleChange = this.handleChange.bind(this);
    };

    // Update the state with the value of the selected option and call the onChange method from the props
    handleChange = (event) => {
        this.setState({selectedCategory: event.target.value});
        this.props.onChange(event.target.value);
    };

    render() {
        return(
            <select value={this.state.selectedCategory} onChange={this.handleChange}>
                {this.categories.map(categoryOption => (
                        <option
                                value={categoryOption.value}
                                disabled={categoryOption.disabled}
                                hidden={categoryOption.hidden}
                                key={categoryOption.value}
                        >
                                {categoryOption.text}
                        </option>
                ))};
            </select>
        );
    };
};
