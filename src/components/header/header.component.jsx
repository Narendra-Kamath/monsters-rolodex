import React from 'react';
import SearchBox from '../search-box/search-box.component';

import './header.style.css';

export const Header = (props) => {
    return (
        <div className="header-container">
            <h2 className="site-name">Monsters Rolodex</h2>
            <SearchBox placeHolder="Search monsters" handleChange={props.handleChange} className="search-box-header"></SearchBox>
        </div>
    );
}