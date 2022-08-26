import React, { useContext } from "react";
import '../styles/ViewMore.scss';
import close from '@icons/icon_close.png';
import AppContext from "../context/AppContext";
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';

function ViewMore({product,animation}) {

  const {AddToCart, removeFromCart, state,} = useContext(AppContext);

  //Funcion para agregar/eliminar al carrito
const handleClick = (item) => {
  itsProductAdded() ? removeFromCart(item) : AddToCart(item);
};

//Funcion para que busque en el contexto si existe el producto en el carrito
const itsProductAdded = () => state.cart.some( (item) => item.id === product.id) ? true : false;


  const {setViewMore} = useContext(AppContext)

  return (
    <aside className={`product-detail ${animation}`}>
      <div className="product-detail-close" onClick={()=>{setViewMore(false)}}>
      <img className="product-detail-close-icon" src={close} alt="close" />
    </div>
      <img
        src={product.images[0]}
        alt={product.title}
      />
      <div className="product-info-view-more">
        <p>${product.price}</p>
        <p>{product.title}</p>
        <p>
          {product.detail}
        </p>
        <button className="primary-button add-to-cart-button">
        { itsProductAdded() ? (
          <>
            <img className="add-to-cart-icon" src={addedToCartImage} alt="" />
            Added to cart
          </>
				) : (
          <>
            <img className="add-to-cart-icon" src={addToCartImage} alt="" />
            Add to cart
          </>
				)}
        </button>
      </div>
    </aside>
  );
}

export { ViewMore };
