import React from 'react'
import "./product.css"
// import image from "../../img/Me.png"

const Product = ({img,link}) => {
  return (
    <div className='p'>
        <div className="p-browser">
          <div className="p-circle-1"></div>
          <div className="p-circle-2"></div>
          <div className="p-circle-3"></div>
        </div>
        <a href={link} target='_blank' rel="noreferrer">
          <img src={img} alt="" className="p-img" />
        </a>
    </div>
  )
}

export default Product