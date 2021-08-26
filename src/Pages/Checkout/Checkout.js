import React from 'react';
import "./Checkout.css";
import { useStateValue } from '../../Components/StateProvider/StateProvider';
import CheckoutProduct from '../../Components/CheckoutProduct/CheckoutProduct';
import Subtotal from '../../Components/Subtotal/Subtotal';

const Checkout = () => {
    const [{basket}] =useStateValue();
    return (
        <div className="checkout">
          <div className="checkout_left">
              <img className="checkout_ad"
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt="img" />
                {
                    basket.length === 0 ? (
                        <div>
                          <h2>Your Shoppig Basket is Empty</h2>
                          <p>You have no items in  your basket. To buy or more items, Click "Add to Basket" next to the item. </p>
                        </div>
                    ):(
                        <div>
                            <h2 className="checkout_title">Your Shopping Basket</h2>
                            {basket.map((item)=>{
                                    return (
                                      <CheckoutProduct 
                                        key={item.id}
                                        id={item.id} 
                                        title={item.title} 
                                        image={item.image} 
                                        price={item.price} 
                                        rating={item.rating}
                                       /> 
                                    );
                                })}
                        </div>
                    )
                }
          </div>
          {basket.length >0 &&(
              <div className="checkout_right">
                  <Subtotal />
              </div>
          )}
        </div>
    )
}

export default Checkout
