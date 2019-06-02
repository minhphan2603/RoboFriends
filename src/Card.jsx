import React from 'react';
import './Card.css';

const Card = (props) => {
    const {id, name, email} = props;
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
            <img src={'https://robohash.org/' + id + '?200x200'} alt="robot"/>
            <div>
                <h1 className="f3">{name}</h1>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;