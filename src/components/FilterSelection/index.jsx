import React from 'react';

export default function FilterSelection({ onSort }) {
    function handleSortChange(e) {
        onSort(e.target.value);
    }

    return (
        <div>
            <select onChange={handleSortChange} defaultValue="default">
                <option disabled value="default"> Sort by</option>
                <option value="desc">Highest</option>
                <option value="asc">Lowest</option>
                
            </select>
        </div>
    )
}
