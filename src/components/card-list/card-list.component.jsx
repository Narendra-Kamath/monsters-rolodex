import React from 'react';

import './card-list.style.css';

import Card from '../card/card.component';

const CardList = props => {
    return (
        <div className="card-list">
        {
            (props.monsters.length < 1) ? 
                    <p className="error-text">No items found</p>
            :
                props.monsters.map((item) => {
                    return (
                        <Card key={item.id} data={item}></Card>
                )
                })
          }
        </div>

    )
}

export default CardList;