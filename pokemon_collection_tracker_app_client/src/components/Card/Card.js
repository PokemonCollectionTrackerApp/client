import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="Card">
        <img src={$`props.species`} />
        <p>{props.nickname}<br />{props.species}</p>
    </div>
  );
}

export default Card;
