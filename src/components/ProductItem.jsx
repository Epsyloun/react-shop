import React, {useState, useEffect,useContext } from 'react';
import '@styles/ProductItem.scss';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';
import AppContext from '../context/AppContext'
import { ViewMore } from './ViewMore';

const ProductItem = ({product}) => {

	const {AddToCart, removeFromCart, state,
		id,
		viewMore,
		setId,
		setInit,
		setToggle,
		setToggleOrders,
		setToggleMenu,
		setViewMore} = useContext(AppContext);
	

	//Funcion para manejar el aside de ver mas
	//Primero cerramos los demas asides
	useEffect(()=>{
		if(viewMore === true){
			setInit(true)
			setToggle(false);
			setToggleMenu(false);
			setToggleOrders(false)
			setViewMore(true);
		}
	},[viewMore])

	function handleView(idSend){
		if(id === idSend)
		{
			setViewMore(!viewMore);
		}else if(id !== idSend){
			setViewMore(false)
			setTimeout(()=>{
				setViewMore(true)
			},100)
			
			setId(idSend);
		}
		
	}

	//Funcion para agregar/eliminar al carrito
	const handleClick = (item) => {
		itsProductAdded() ? removeFromCart(item) : AddToCart(item);
	};

	//Funcion para que busque en el contexto si existe el producto en el carrito
	const itsProductAdded = () => state.cart.some( (item) => item.id === product.id) ? true : false;

	return (
		<div className="ProductItem">
		<h1>{product.length}</h1>
			<img onClick={()=>handleView(product.id)} src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div onClick={()=>handleView(product.id)}>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={()=>handleClick(product)} >
				{ itsProductAdded() ? (
					<img src={addedToCartImage} alt="" />
				) : (
					<img src={addToCartImage} alt="" />
				)}
				</figure>
			</div>
			<ViewMore product={product} animation={viewMore ? 'in' : 'out'}/>	
		</div>
	);
}

export default ProductItem;
