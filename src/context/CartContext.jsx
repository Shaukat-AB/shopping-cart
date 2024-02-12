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
        // fix irreguler decimal part of toal price when summed
        const updatedTotal = fixSumOfTwoNumbers(state.total, product.price);
        dispatch({
            type: "ADD_TO_CART",
            payload: { total: updatedTotal, cartList: updatedCart },
        });
    };

    const removeFromCart = (product) => {
        const updatedCart = state.cartList.filter((p) => p.id !== product.id);
        // "fixSumOfTwoNumbers" here does substraction as price is negative
        const updatedTotal = fixSumOfTwoNumbers(state.total, -product.price);
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: { total: updatedTotal, cartList: updatedCart },
        });
    };

    const fixSumOfTwoNumbers = (num1, num2) => (num1 * 1000 + num2 * 1000) / 1000;

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
