import React from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';
import  useGetProducts from '../hooks/useGetProducts';

const API = 'https://api.escuelajs.co/api/v1/products'

const ProductList = () => {
	//const products = useGetProducts(API)
	const products = [{
		images: ['https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'],
		title:'Nombre del articulo',
		price:'50.00',
		detail:'una pequeña descripccion del producto'
	}
	]
	
	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product=>(
					<ProductItem product={product}/>
				))}
			</div>
		</section>
	);
}

export default ProductList;
