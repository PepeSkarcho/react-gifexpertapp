import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [valueInput, setValueInput] = useState('');

    const handleInputchange = (e) => {
        setValueInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (valueInput.trim().length > 2) {
            setCategories(cats => [valueInput,...cats]);
            setValueInput('');
        }
        
    }

    return (
        <form onSubmit = {handleSubmit}>
          <h1>Add Category</h1>  
          <h2>{valueInput}</h2>
          <input
            type = 'text'
            value = {valueInput}
            onChange = {handleInputchange}
          />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
    //setCategories: PropTypes.element.isRequired
};
