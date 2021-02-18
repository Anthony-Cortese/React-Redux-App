import React from 'react'



function Card(props) {
    return (
    <div className="card-group">

         <div className='card'>
          <img src={props.image} alt="shoe img" />
          <p>Name: {props.name}</p>
          <p>Price: {props.price}</p>
          <p>Gender: {props.category}</p>  
        </div>
    </div>
    )
}

export default Card
