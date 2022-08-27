import React, { useState,useEffect } from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';


const API = 'https://api.escuelajs.co/api/v1/products'

const ProductList = ({products}) => {
	//const products = useGetProducts(API)

	const [listProducts, setListProducts] = useState(products);

	useEffect(()=>{
		setListProducts([])
		setTimeout(()=>{
			setListProducts(products)
		},100)
	},[products])

	return (
		<section className="main-container">
			<div className="ProductList">
				{listProducts.map((product, index)=>(
					<ProductItem index={index} product={product} key={product.id}/>
				))}
			</div>
		</section>
	);
}

export default ProductList;
