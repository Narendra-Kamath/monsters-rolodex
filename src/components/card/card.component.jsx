import React from 'react';

import './card.style.css';

const Card = (props) => {
    return (
        <div className="card-container">
            <img className="monster-image" alt="monster" src={`https://www.robohash.org/${props.data.id}?set=set1&size=180x180`}></img>
            <h2>{props.data.name}</h2>
            <h5>{props.data.email}</h5>
        </div>
    )
}

export default Card;