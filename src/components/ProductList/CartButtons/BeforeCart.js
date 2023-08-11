import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import "./CartButtons.css";
import { addToCart } from "../../../redux/cart";
import { CartContext } from "../../../context/cart/cartContext";

const BeforeCart = () => {
   const { addToCart } = useContext(CartContext);
   const dispatch=useDispatch();
   

   return (
      <div className="before-cart">
         <button className="add-cart-button" onClick={()=> dispatch(addToCart())}>
            Add to cart
         </button>
      </div>
   );
};

export default BeforeCart;
