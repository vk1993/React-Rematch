import React from 'react';
import './searchBar.css';

const SearchBar = ({placeholder,getSearch,searchField}) =>{
    
    return(
        <input className="search"
           type='search' name='searchField' 
           placeholder= {placeholder}
           onChange={getSearch} 
           value={searchField}>
        </input>
    )
}

export default SearchBar;