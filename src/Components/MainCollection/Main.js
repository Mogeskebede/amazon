import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../Header/Header'
import Home from '../Home/Home'
 import CheckOut from '../CheckOut/CheckOut'
import Login from '../Login/Login';
import { useStateValue } from '../../dataLayer/StateProvider/stateProvider';
import { auth } from "../../dataLayer/fireBase"
import Footer from '../Footer/Footer';
import Payment from '../Payment/Payment';
import { loadStripe } from "@stripe/stripe-js";
//to wrape stripe
import { Elements } from "@stripe/react-stripe-js";
import Orders from '../Orders/Orders';
//stripe API key(publishable key)
const promise = loadStripe("pk_test_51MNNLjDr1UJRGJIXkpj1OgDA1CUIL7rqOSCJohaJbjO7iR0YlQHGhdx0EfHgb83DVqPL7CNmisiiJmExRfwCCfJh005dummDCI")
function Main() {

 
  const [{ basket, user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user:authUser,
       })
      } else {
        dispatch(
          {type: 'SET_USER',
        user:null,}
        )
      }
    })
  },[])
  return (

       <BrowserRouter>
      <>
        <Routes>
          <Route path='Login' element={<Login />} />
          <Route path='orders' element={
            <>
            <Header />
            <Orders />
            {/* <Footer/> */}
               </> } />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer/>
                
              </>
            }
          />
          <Route
            path="/Payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <CheckOut />
                <Footer/>
                
              </>
            }
          />

        </Routes>
        
      </>
  
    </BrowserRouter>
       
  )
}

export default Main
