import React,{useContext} from "react";
import AppContext from '../context/AppContext';
import '../styles/MobileNav.scss'

function MobileNav({animation, toggleMenuMobile, setToggleMenuMobile}) {
  const {
    userFlag,
    setCategory,
  } = useContext(AppContext);
  return (
    <div className={`mobile-menu ${animation}`}>
      <ul>
					<li onClick={()=>{setCategory(null); setToggleMenuMobile(!toggleMenuMobile)}}>
						<a href="#">All</a>
					</li>
					<li onClick={()=>{setCategory('Clothes'); setToggleMenuMobile(!toggleMenuMobile)}}>
						<a href="#">Clothes</a>
					</li>
					<li onClick={()=>{setCategory('Electronics'); setToggleMenuMobile(!toggleMenuMobile)}}>
						<a href="#">Electronics</a>
					</li>
					<li onClick={()=>{setCategory('Furnitures'); setToggleMenuMobile(!toggleMenuMobile)}}>
						<a href="#">Furnitures</a>
					</li>
					<li onClick={()=>{setCategory('Toys'); setToggleMenuMobile(!toggleMenuMobile)}}>
						<a href="#">Toys</a>
					</li>
					<li onClick={()=>{setCategory('Others'); setToggleMenuMobile(!toggleMenuMobile)}} >
						<a href="#">Others</a>
					</li>
				</ul>
      {userFlag?
      <>
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
      </>
      :
      <ul>
        <li>
        <a href="/login" className="sign-in">
            Iniciar sesión
          </a>
        </li>
      </ul>
      }
    </div>
  );
}

export { MobileNav };
