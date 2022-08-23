import React, { useState,useContext } from 'react';
import '@styles/ProductItem.scss';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';
import AppContext from '../context/AppContext'

const ProductItem = ({product,images, title, price}) => {

	const {AddToCart, removeFromCart, state} = useContext(AppContext);

	//Funcion para agregar/eliminar al carrito
	const handleClick = (item) => {
		itsProductAdded() ? removeFromCart(item) : AddToCart(item);
	};

	//Funcion para que busque en el contexto si existe el producto en el carrito
	const itsProductAdded = () => state.cart.some( (item) => item.id === product.id) ? true : false;

	return (
		<div className="ProductItem">
			<img src={images[0]} alt={title} />
			<div className="product-info">
				<div>
					<p>${price}</p>
					<p>{title}</p>
				</div>
				<figure onClick={()=>handleClick(product)} >
				{ itsProductAdded() ? (
					<img src={addedToCartImage} alt="" />
				) : (
					<img src={addToCartImage} alt="" />
				)}
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
