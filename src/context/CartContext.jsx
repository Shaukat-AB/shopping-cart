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
        const updatedCart = [...state.cartList, { ...product, ["count"]: 1 }];
        const updatedTotal = fixNumber(state.total + product.price);
        dispatch({
            type: "ADD_TO_CART",
            payload: { total: updatedTotal, cartList: updatedCart },
        });
    };

    const removeFromCart = (product) => {
        const updatedCart = state.cartList.filter((p) => p.id !== product.id);
        const updatedTotal = fixNumber(
            state.total - product.price * (product.count ?? 1)
        );
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: { total: updatedTotal, cartList: updatedCart },
        });
    };

    const updateProductCount = (id, count) => {
        const updatedCart = [...state.cartList];
        let updatedTotal = 0;
        for (let product of updatedCart) {
            const match = product.id === id;
            match && (product.count += count);
            updatedTotal = fixNumber(
                updatedTotal + product.price * product.count
            );
        }
        dispatch({
            type: "UPDATE_PRODUCT_COUNT",
            payload: { total: updatedTotal, cartList: updatedCart },
        });
    };

    const fixNumber = (num) => parseFloat(num.toFixed(2));

    const value = {
        total: state.total,
        cartList: state.cartList,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        updateProductCount: updateProductCount,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
