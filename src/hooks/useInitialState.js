import { useState } from "react";

const initialState = {
  cart: [],
};


const useInitialState = () => {
  const [state, setState] = useState(initialState);

  //Creamos una funcion para guardar el id en el view more
	const [id, setId] = useState(0)

  const [init, setInit] = useState(false)
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [viewMore, setViewMore] = useState(false)

  const AddToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };
  const removeFromCart = (payload) => {
		setState({
			...state,
			cart: state.cart.filter(items => items.id !== payload.id),
		});
	}

  return { 
    id,
    viewMore,
    state,
    init,
    toggle,
    toggleOrders,
    toggleMenu,
    AddToCart,
    removeFromCart,
    setId,
    setViewMore,
    setInit,
    setToggle,
    setToggleOrders,
    setToggleMenu,
  };
};

export default useInitialState;
