import React from 'react'

function GridProduct(props) {
  return (
    <div>
      

      <img src={props.imgUrl} alt="product" />
      <button>{props.Title}</button>
      
      
    </div>
  )
}

export default GridProduct
