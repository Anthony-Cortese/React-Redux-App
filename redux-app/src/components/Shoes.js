import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Card from './Card'
import { getShoes } from '../actions'


const Shoes = (props) => {
    const { item, isFetching, error, } = props;

    console.log(item)
    
 const handleClick = ()=> {
     props.getShoes();
 }

 if (error) {
     return <h2>We have an error: {error}</h2>
 }

 if (isFetching) {
     return <h2>Fetching the shoes for you!</h2>
 }
    
    return (
        <div className="card">
          <h2>New 2021 Shoes</h2>
          <button onClick={handleClick}>Look at new Shoes</button>
           {item.map((ite ) => <Card key={ite._id} {...ite} />)} 
        </div>
    )
}

const mapToStateProps = state => {
    return {
        item: state.item,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapToStateProps, {getShoes})(Shoes)
