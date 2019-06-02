import React from 'react';
import Card from './Card';

const Cardlist = ({robots}) => {
    const cardArray = [];
    for (let i = 0; i<robots.length; i++){
        cardArray.push(<Card key={i} id={robots[i].id} name ={robots[i].name} email={robots[i].email}/>);
    }
    return (
        <div>
            {/* {robots.map((user,i) => <Card id={i} />)} */}
            {cardArray}
        </div>
    );
}

export default Cardlist;