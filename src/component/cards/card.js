import React from 'react';
import './card.css'


const Card = (props) =>{
    console.log(props)
    return (
        <React.Fragment >
            <div className="card-container">
                <img alt="monstores" src={`https://robohash.org/${props.monstres.id}?set=set2&size=180x180`}/>
             <h2>{props.monstres.name}</h2>
             <p>{props.monstres.email}</p>
            </div>
        </React.Fragment>
    )
}

export default Card;
