import React, { useState } from 'react';

export default function SearchForm({ onSubmit }) {
    const [inputValue, setInputValue] = useState("");

    function handleInput(e) {
        const newInput = e.target.value;
        setInputValue(newInput)
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(inputValue);
        setInputValue("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={inputValue} type='text' required onChange={handleInput} />
                <input type='submit' value='search' />
            </form>
        </div>
    )
}
