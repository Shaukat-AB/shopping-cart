import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

const initialState = {
    cartList: [],
    total: 0,
};

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (product) => {
        const updatedCart = [...state.cartList, product];
        const updatedTotal = state.total + product.price;
        dispatch({
            type: "ADD_TO_CART",
            payload: { total: updatedTotal, cartList: updatedCart },
        });
    };

    const removeFromCart = (product) => {
        const updatedCart = state.cartList.filter((p) => p.id !== product.id);
        const updatedTotal = state.total - product.price;
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: { total: updatedTotal, cartList: updatedCart },
        });
    };

    const value = {
        total: state.total,
        cartList: state.cartList,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
