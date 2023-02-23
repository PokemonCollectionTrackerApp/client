import React from 'react';
import './Card.css';

function Card(props) {
    var type = props.type || "fairy"
    var move1 = <tr>{props.move1 || "placehoder"}</tr>
    if(props.move2){
        var move2 = <tr>{props.move2}</tr>
    }
    if(props.move3){
        var move3 = <tr>{props.move3}</tr>
    }
    if(props.move4){
        var move4 = <tr>{props.move4}</tr>
    }
    if(props.isClicked == false){
        return (
            <div className="card">
                <img src={`props.species`} />
                <p>{props.nickname || "Godzirra"}</p>
                <p className={type}>{props.species || "Tyranitar"}</p>
            </div>
          );
    } else {
        return (
            <div className="card">
                <img src={`props.species`} />
                <p>{props.nickname || "Godzirra"}</p>
                <p className={type}>{props.species || "Tyranitar"}</p>
                <td className="moves">
                    {move1}
                    {move2}
                    {move3}
                    {move4}
                </td>
            </div>
        )
    }
}

export default Card;
