import React from 'react';

function Card (props) {
console.log(props)
    return (
        <div>Card
            <p>{props.title}</p>
            <p>{props.description}</p>
        </div>
    )
}

export default Card;