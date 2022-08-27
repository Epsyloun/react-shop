import React, { useState, useContext, useEffect } from "react";
import '../styles/ViewMore.scss';
import close from '@icons/icon_close.png';
import AppContext from "../context/AppContext";
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';
import {searchProduct} from "../utils/ProductsArray";

function ViewMore({animation,id}) {
  
  const {AddToCart, removeFromCart, state, } = useContext(AppContext);

  const [recivedId, setRecivedId] = useState(1);

  useEffect(()=>{
  if(id === 0)
  {
    setRecivedId(1)
  }else{
    setRecivedId(id)
  }
  },[id])
  const searchProducts = searchProduct(recivedId)


  //Funcion para agregar/eliminar al carrito
  const handleClick = (item) => {
  itsProductAdded() ? removeFromCart(item) : AddToCart(item);
};

//Funcion para que busque en el contexto si existe el producto en el carrito
const itsProductAdded = () => state.cart.some( (item) => item.id === searchProducts.id) ? true : false;


  const {setViewMore} = useContext(AppContext)

  return (
    <aside className={`product-detail ${animation}`}>
      <div className="product-detail-close" onClick={()=>{setViewMore(false)}}>
      <img className="product-detail-close-icon" src={close} alt="close" />
    </div>
      <img
        src={searchProducts.images[0]}
        alt={searchProducts.title}
      />
      <div className="product-info-view-more">
        <p>${searchProducts.price}</p>
        <p>{searchProducts.title}</p>
        <p>
          {searchProducts.detail}
        </p>

        { itsProductAdded() ? (
          <>
          <button className="disabled-button add-to-cart-button" onClick={()=>handleClick(searchProducts)}>
              <img className="add-to-cart-icon" src={addedToCartImage} alt="" />
              Added to cart
            </button>
          </>
				) : (
          <>
          <button className="primary-button add-to-cart-button" onClick={()=>handleClick(searchProducts)}>
              <img className="add-to-cart-icon" src={addToCartImage} alt="" />
              Add to cart
            </button>
          </>
				)}

      </div>
    </aside>
  );
}

export { ViewMore };
