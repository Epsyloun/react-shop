import React, { useState, useContext, useEffect } from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import AppContext from '../context/AppContext';
import MyOrder from '../containers/MyOrder'
import { MobileNav } from '@components/MobileNav'
import { ViewMore } from './ViewMore';

const Header = () => {

	const {state:{cart},
		id,
		viewMore,
		init,
		toggle,
		toggleOrders,
		toggleMenu,
		setInit,
		setToggle,
		setToggleOrders,
		setToggleMenu,
		setViewMore,
		setCategory,
	} = useContext(AppContext)

	const handleToggle = () => {
		setToggle(!toggle);
	}

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

	useEffect(()=>{
		if(toggleMenu === true){
			setInit(true)
			setToggleOrders(false);
			setToggle(false);
			setViewMore(false);
			setToggleMenu(true)
		}
	},[toggleMenu])

	useEffect(()=>{
		if(toggle === true){
			setInit(true)
			setToggleOrders(false);
			setToggleMenu(false);
			setViewMore(false);
			setToggle(true);
		}
	},[toggle])

	useEffect(()=>{
		if(toggleOrders === true){
			setInit(true)
			setToggle(false);
			setToggleMenu(false);
			setViewMore(false);
			setToggleOrders(true)
		}
	},[toggleOrders])

	return (
		<nav style={{zIndex:2}}>
			<img src={menu} alt="menu" className="menu" onClick={()=>setToggleMenu(!toggleMenu)} />
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a onClick={()=>{setCategory(null)}} href="#">All</a>
					</li>
					<li>
						<a onClick={()=>{setCategory('Clothes')}} href="#">Clothes</a>
					</li>
					<li>
						<a onClick={()=>{setCategory('Electronics')}} href="#">Electronics</a>
					</li>
					<li>
						<a onClick={()=>{setCategory('Furnitures')}} href="#">Furnitures</a>
					</li>
					<li>
						<a onClick={()=>{setCategory('Toys')}} href="#">Toys</a>
					</li>
					<li>
						<a onClick={()=>{setCategory('Others')}} href="#">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle}>
						<a href='#'>platzi@example.com</a>
					</li>
					<li className="navbar-shopping-cart" onClick={()=>setToggleOrders(!toggleOrders)}>
						<img src={shoppingCart} alt="shopping cart" />
						{cart.length >0 ? <div>{cart.length} </div>: null}
					</li>
				</ul>
			</div>
			{init ?
			<>
				<ViewMore  id={id} animation={viewMore ? 'in' : 'out'}/>
				<MobileNav animation={toggleMenu ? 'in-mobile' : 'out-mobile'}/>
				<Menu animation={toggle ? 'in-menu' : 'out-menu'}/>
				<MyOrder animation={toggleOrders ? 'in' : 'out'} toggleOrders={toggleOrders} setToggleOrders={setToggleOrders}/>
			</>
			:
			<>
				<ViewMore  id={id} animation=''/>
				<MobileNav animation=''/>
				<Menu animation=''/>
				<MyOrder animation='' toggleOrders={toggleOrders} setToggleOrders={setToggleOrders}/>
			</>
			}
		</nav>
	);
}

export default Header;
