import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories, categories }) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue( e.target.value )
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setCategories([inputValue]);
        setInputValue('')
    }
    
    
    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
}

export default AddCategory;
