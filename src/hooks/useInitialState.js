import { useState } from "react";

const initialState = {
  cart: [],
};


const useInitialState = () => {

  //VARIABLES DE USUARIO
  const [email, setEmail] = useState(null);//email
  const [pass, setPass] = useState(null);//pass
	const [userFlag, setUserFlag] = useState(false);//Flag de user


  //VARIABLES PARA DISEÑO
  //Variable para ventana de view more
  const [viewMore, setViewMore] = useState(false)
  //variable para mostrar productos
	const [id, setId] = useState(0)
  //variable para mostrar categorias
  const [category, setCategory] = useState(null);

  //VARIABLES DE CARRITO
  //Estado que contiene los mantenimientos del carrito
  const [state, setState] = useState(initialState);
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
    category,
    id,
    viewMore,
    state,
    email,
    pass,
    userFlag,
    setCategory,
    AddToCart,
    removeFromCart,
    setId,
    setViewMore,
    setEmail,
    setPass,
    setUserFlag,
  };
};

export default useInitialState;
