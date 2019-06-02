import React from 'react';

const SearchBox = ({searchChange , searchField}) => {
    const x = 1;
    return (
        <div>
            {x === 1 ? <p>tao la 1</p> : <p>tao khac 1</p>}
            <p>{x === 1 ? 'tao la 1' : 'tao khac 1'}</p>
            <p>'{searchField}'</p>
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
