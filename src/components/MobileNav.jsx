import React,{useContext} from "react";
import AppContext from '../context/AppContext';
import '../styles/MobileNav.scss'

function MobileNav({animation}) {
  const {setCategory,setToggleMenu, toggleMenu } = useContext(AppContext);
  return (
    <div className={`mobile-menu ${animation}`}>
      <ul>
					<li onClick={()=>{setCategory(null); setToggleMenu(!toggleMenu)}}>
						<a href="#">All</a>
					</li>
					<li onClick={()=>{setCategory('Clothes'); setToggleMenu(!toggleMenu)}}>
						<a href="#">Clothes</a>
					</li>
					<li onClick={()=>{setCategory('Electronics'); setToggleMenu(!toggleMenu)}}>
						<a href="#">Electronics</a>
					</li>
					<li onClick={()=>{setCategory('Furnitures'); setToggleMenu(!toggleMenu)}}>
						<a href="#">Furnitures</a>
					</li>
					<li onClick={()=>{setCategory('Toys'); setToggleMenu(!toggleMenu)}}>
						<a href="#">Toys</a>
					</li>
					<li onClick={()=>{setCategory('Others'); setToggleMenu(!toggleMenu)}} >
						<a href="#">Others</a>
					</li>
				</ul>

      <ul>
        <li>
          <a href="/">My orders</a>
        </li>
        <li>
          <a href="/">My account</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="/" className="email">
            platzi@example.com
          </a>
        </li>
        <li>
          <a href="/" className="sign-out">
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
}

export { MobileNav };
