import React from 'react';

import './search-box.style.css';

const SearchBox = (props) => {
        return (
            <div className="search-container">
              <input type="text" placeholder={props.placeHolder} className="search-box" onChange={props.handleChange} />
            </div>
        )
}

export default SearchBox;