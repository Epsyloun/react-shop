import { useState } from "react";

const initialState = {
  cart: [],
};


const useInitialState = () => {
  const [state, setState] = useState(initialState);

  //Creamos una funcion para guardar el id en el view more
	const [id, setId] = useState(0)

  //Hook para view more
  const [viewMore, setViewMore] = useState(false)

  //Variable para categorias
  const [category, setCategory] = useState(null);

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
    setCategory,
    AddToCart,
    removeFromCart,
    setId,
    setViewMore,
  };
};

export default useInitialState;
