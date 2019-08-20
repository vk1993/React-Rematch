import React from 'react';
import './cardlist.css';
import Card from '../cards/card'

const CardLIst = (props) => {
  
        return(
            <div className='card-list'>
                {
                    props.monsters.map(monster =>
                    <Card key={monster.id} monstres = {monster}></Card>)
                }
            </div>
        ) 
}

export default CardLIst;