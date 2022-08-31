import React, { useState,useEffect, useContext } from 'react';
import ProductList from '@containers/ProductList';
import {ProductArray, searchByCategory} from '../utils/ProductsArray';
import AppContext from '../context/AppContext';
import Header from '@components/Header';


const Home = () => {
	const {category} = useContext(AppContext)

	const [products, setProducts] = useState(ProductArray());

	useEffect(()=>{
		if(category===null){
			setProducts(ProductArray())
		}else{
			setProducts(searchByCategory(category))
		}
	}, [category])

	return (
		<>
			<Header/>
			<ProductList products={products} />
		</>
	);
}

export default Home;
