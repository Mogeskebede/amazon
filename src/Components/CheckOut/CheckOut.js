import React from 'react'
import { useStateValue } from '../../dataLayer/StateProvider/stateProvider';
import CheckOutProduct from '../CheckOutProduct/CheckOutProduct'
import Subtotal from '../Subtotal/Subtotal'
import './CheckOut.css'
function CheckOut() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
      <div className="checkout">
          <div className="checkout__left">
              <img
					src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
					alt=""
					className="checkout__ad"
              />
               <h3>Hello</h3>
        <h2 className="checkout__title">Your shopping Basket</h2>
  {basket.map((item) => (
          <CheckOutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout_right">
        <Subtotal/>
      </div>
  </div>
  )
}

export default CheckOut
