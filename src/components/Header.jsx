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

	//Variables del context
	const {state:{cart},
		id,
		viewMore,
		email,
		userFlag,
		setViewMore,
		setCategory,
	} = useContext(AppContext);

	//estados para los slider laterales
	//Dropdown My account
	const [initToggleMyAccount, setInitToggleMyAccount] = useState(false);
	const [initToggleOrders, setInitToggleOrders] = useState(false);
	//Menu en mobile
	const [initToggleMenuMobile, setInitToggleMenuMobile] = useState(false);
	const [toggleMenuMobile, setToggleMenuMobile] = useState(false);
	//Menu del carrito
	const [toggleMyAccount, setToggleMyAccount] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	//inicializacion de efecto view more ya que la otra parte esta en el context
	const [initViewMore, setInitViewMore] = useState(false);

	//Funcion para manejar los aside que se esconden
	//effect de view more
	useEffect(()=>{
		if(viewMore === true){
			setInitViewMore(true)
			setToggleMyAccount(false);
			setToggleMenuMobile(false);
			setToggleOrders(false)
			setViewMore(true);
		}
	},[viewMore])
	//effect de menu mobile
	useEffect(()=>{
		if(toggleMenuMobile === true){
			setInitToggleMenuMobile(true)
			setToggleOrders(false);
			setToggleMyAccount(false);
			setViewMore(false);
			setToggleMenuMobile(true)
		}
	},[toggleMenuMobile])
	//effect dropdown my account
	useEffect(()=>{
		if(toggleMyAccount === true){
			setInitToggleMyAccount(true)
			setToggleOrders(false);
			setToggleMenuMobile(false);
			setViewMore(false);
			setToggleMyAccount(true);
		}
	},[toggleMyAccount])
	//effect del carrito
	useEffect(()=>{
		if(toggleOrders === true){
			setInitToggleOrders(true)
			setToggleMyAccount(false);
			setToggleMenuMobile(false);
			setViewMore(false);
			setToggleOrders(true)
		}
	},[toggleOrders])

	return (
		<nav style={{zIndex:2}}>
			<img src={menu} alt="menu" className="menu" onClick={()=>setToggleMenuMobile(!toggleMenuMobile)} />
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
					{userFlag?
					<li className="navbar-email" onClick={()=>setToggleMyAccount(!toggleMyAccount)}>
						<a href='#'>{email}</a>
					</li>
					:
					<li className="navbar-email">
						<a href='/login'>Iniciar sesión</a>
					</li>
					}

					<li className="navbar-shopping-cart" onClick={()=>setToggleOrders(!toggleOrders)}>
						<img src={shoppingCart} alt="shopping cart" />
						{cart.length >0 ? <div>{cart.length} </div>: null}
					</li>
				</ul>
			</div>
			{initViewMore?
				<ViewMore  id={id} animation={viewMore ? 'in' : 'out'}/>
			:
				<ViewMore  id={id} animation=''/>
			}
			{initToggleMenuMobile?
				<MobileNav toggleMenuMobile={toggleMenuMobile} setToggleMenuMobile={setToggleMenuMobile} animation={toggleMenuMobile ? 'in-mobile' : 'out-mobile'}/>
			:
				<MobileNav toggleMenuMobile={toggleMenuMobile} setToggleMenuMobile={setToggleMenuMobile} animation=''/>
			}
			{initToggleMyAccount?
				<Menu animation={toggleMyAccount ? 'in-menu' : 'out-menu'}/>
			:
				<Menu animation=''/>
			}
			{initToggleOrders?
				<MyOrder animation={toggleOrders ? 'in' : 'out'} toggleOrders={toggleOrders} setToggleOrders={setToggleOrders}/>
			:
				<MyOrder animation='' toggleOrders={toggleOrders} setToggleOrders={setToggleOrders}/>
			}
		</nav>
	);
}

export default Header;
