import React, { useState, useContext, useEffect } from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import AppContext from '../context/AppContext';
import MyOrder from '../containers/MyOrder'
import { MobileNav } from '@components/MobileNav'

const Header = () => {
	
	const {state:{cart}, 
		init,
		toggle,
		toggleOrders,
		toggleMenu,
		setInit,
		setToggle,
		setToggleOrders,
		setToggleMenu,
		setViewMore,
	} = useContext(AppContext)

	const handleToggle = () => {
		setToggle(!toggle);
	}

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
		<nav>
			<img src={menu} alt="menu" className="menu" onClick={()=>setToggleMenu(!toggleMenu)} />
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
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
				<MobileNav animation={toggleMenu ? 'in-mobile' : 'out-mobile'}/>
				<Menu animation={toggle ? 'in-menu' : 'out-menu'}/>
				<MyOrder animation={toggleOrders ? 'in' : 'out'} toggleOrders={toggleOrders} setToggleOrders={setToggleOrders}/>
			</>
			:
			<>
				<MobileNav animation=''/>
				<Menu animation=''/>
				<MyOrder animation='' toggleOrders={toggleOrders} setToggleOrders={setToggleOrders}/>
			</>
			}
		</nav>
	);
}

export default Header;
