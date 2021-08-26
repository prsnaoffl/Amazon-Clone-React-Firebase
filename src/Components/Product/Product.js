import React from 'react';
import "./Product.css";
import { useStateValue } from '../StateProvider/StateProvider';


const Product = ({id,title,image,price,rating}) => {
     const[{basket},dispatch]=useStateValue();  

     const addToBasket=()=>{
         dispatch({
             type:"ADD_TO_BASKET",
             item:{
                 id,
                 title,
                 image,
                 price,
                 rating
             },
         });
     };

    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                 <small>₹</small>
                 <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating)
                     .fill()
                     .map((_)=>(
                         <span>⭐</span>
                     ))
                     }
                </div>
            </div>
            <img className="product_img" src={image} alt="img" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
