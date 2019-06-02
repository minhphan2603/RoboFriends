import React from 'react';

const SearchBox = ({searchChange , searchField}) => {
    const x = 1;
    return (
        <div>
            <input className="pa3 ba b--green bg-lightest-blue" 
            type="search" 
            placeholder="search robots"
            onChange = {searchChange}
            value={searchField}
            />
        </div>
    )
}

export default SearchBox;
